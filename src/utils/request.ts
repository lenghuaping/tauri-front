// import { useToast } from '@chakra-ui/react';

import { RequestBodyType, RequestFunctionParams } from 'yapi-to-typescript';
import { toast } from '../App';

export interface RequestOptions {
  /**
   * 是否返回 Blob 结果，适用某些返回文件流的接口。
   */
  returnBlob?: boolean;
}

export enum RequestErrorType {
  NetworkError = 'NetworkError',
  StatusError = 'StatusError',
  BusinessError = 'BusinessError',
}

export class RequestError extends Error {
  constructor(
    public type: RequestErrorType,
    public message: any,
    public httpStatusOrBusinessCode: number = 0
  ) {
    super(message instanceof Error ? message.message : String(message));
  }
}

async function request<TResponseData>(
  payload: RequestFunctionParams,
  options?: RequestOptions
): Promise<TResponseData | undefined> {
  try {
    // 基础 URL，可以从载荷中拉取或者写死
    const baseUrl = payload.prodUrl;

    // 完整 URL
    const url = `${baseUrl}/shawicx/api${payload.path}`;

    const token = localStorage.getItem('access_token');

    // fetch 选项
    const fetchOptions: RequestInit = {
      method: payload.method,
      headers: {
        ...(payload.hasFileData
          ? {}
          : payload.requestBodyType === RequestBodyType.json
          ? { 'Content-Type': 'application/json; charset=UTF-8' }
          : payload.requestBodyType === RequestBodyType.form
          ? {
              'Content-Type':
                'application/x-www-form-urlencoded; charset=UTF-8',
            }
          : {}),
        Authorization: `Bearer ${token}`,
      },
      body: payload.hasFileData
        ? payload.getFormData()
        : payload.requestBodyType === RequestBodyType.json
        ? JSON.stringify(payload.data)
        : payload.requestBodyType === RequestBodyType.form
        ? Object.keys(payload.data)
            .filter((key) => payload.data[key] != null)
            .map(
              (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(
                  payload.data[key]
                )}`
            )
            .join('&')
        : undefined,
    };

    // 发起请求
    const [fetchErr, fetchRes] = await fetch(url, fetchOptions).then<
      [
        // 如果遇到网络故障，fetch 将会 reject 一个 TypeError 对象
        TypeError,
        Response
      ]
    >(
      (res) => [null, res] as any,
      (err) => [err, null] as any
    );

    // 网络错误
    if (fetchErr) {
      throw new RequestError(RequestErrorType.NetworkError, fetchErr);
    }

    if (fetchRes.status >= 500) {
      toast({
        position: 'top',
        duration: 3000,
        status: 'error',
        isClosable: true,
        description: fetchRes.statusText,
      });

      throw new RequestError(
        RequestErrorType.StatusError,
        `${fetchRes.status}: ${fetchRes.statusText}`,
        fetchRes.status
      );
    } else if (fetchRes.status >= 400) {
      toast({
        position: 'top',
        duration: 3000,
        status: 'error',
        isClosable: true,
        description: fetchRes.statusText,
      });

      throw new RequestError(
        RequestErrorType.StatusError,
        `${fetchRes.status}: ${fetchRes.statusText}`,
        fetchRes.status
      );
    } else if (fetchRes.status >= 300) {
      throw new RequestError(
        RequestErrorType.StatusError,
        `${fetchRes.status}: ${fetchRes.statusText}`,
        fetchRes.status
      );
    } else if (fetchRes.status < 200) {
      throw new RequestError(
        RequestErrorType.StatusError,
        `${fetchRes.status}: ${fetchRes.statusText}`,
        fetchRes.status
      );
    }

    // 请求结果处理
    const res = options?.returnBlob
      ? await fetchRes.blob()
      : (fetchRes.headers.get('Content-Type') || '').indexOf(
          'application/json'
        ) >= 0
      ? await fetchRes
          .json()
          // 解析 JSON 报错时给个空对象作为默认值
          .catch(() => ({}))
      : await fetchRes.text();

    // 假设 status 为 0 时表示请求成功，其他表示请求失败，同时 msg 表示错误信息
    if (res.success) {
      return res.data;
    } else {
      if (res.status === 10002) {
        toast({
          position: 'top',
          duration: 3000,
          status: 'error',
          isClosable: true,
          description: '请重新登录',
        });
        location.pathname = '/login';
      } else {
        toast({
          position: 'top',
          duration: 3000,
          status: 'error',
          isClosable: true,
          description: res.message,
        });
      }
    }
    // 适配 dataKey，取出 data
  } catch (err: unknown) {
    // 重试函数
    const retry = () => request<TResponseData>(payload, options);
    if (err instanceof RequestError) {
      // 网络错误处理
      if (err.type === RequestErrorType.NetworkError) {
        // 此处可弹窗说明原因：err.message，最好也提供重试操作，下面以原生 confirm 为例，建议替换为项目中使用到的弹窗组件
        const isRetry = confirm(`网络错误：${err.message}，是否重试？`);
        if (isRetry) {
          return retry();
        }
        throw err;
      } else if (err.type === RequestErrorType.StatusError) {
        // 状态错误处理
        // 用户未登录处理
        if (err.httpStatusOrBusinessCode === 401) {
          // 推荐在此处发起登录逻辑
        }
      } else if (err.type === RequestErrorType.BusinessError) {
        toast({
          position: 'top',
          duration: 3000,
          status: 'error',
          isClosable: true,
          description: err.message,
        });
        throw err;
      }
    } else {
      throw err;
    }
  }
}

export default request;
