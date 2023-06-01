/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from '../utils/request';

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>;

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig;
};

const mockUrl_0_0_0_0 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_0 = '' as any;
const prodUrl_0_0_0_0 = '' as any;
const dataKey_0_0_0_0 = 'data' as any;

/**
 * 接口 项目列表 的 **请求类型**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/list`
 */
export interface V1GitlabListRequest {
  current: string;
  limit: string;
  description?: string;
  is_privatization_project?: string;
}

/**
 * 接口 项目列表 的 **返回类型**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/list`
 */
export interface V1GitlabListResponse {
  list: {
    /**
     * id
     */
    id: number;
    /**
     * 项目id
     */
    project_id: string;
    /**
     * 描述
     */
    description: string;
    /**
     * Gitlab 项目地址
     */
    repo_url: string;
    /**
     * 是否私有化仓库
     */
    is_privatization_project: boolean;
    /**
     * 名称
     */
    name: string;
    /**
     * Gitlab 仓库名称
     */
    repo_name: string;
  }[];
  /**
   * 当前页码
   */
  current: number;
  /**
   * 分页大小
   */
  limit: number;
  /**
   * 总数
   */
  total: number;
}

/**
 * 接口 项目列表 的 **请求配置的类型**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/list`
 */
type V1GitlabListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/v1/gitlab/list',
    'data',
    string,
    'current' | 'limit' | 'description' | 'is_privatization_project',
    false
  >
>;

/**
 * 接口 项目列表 的 **请求配置**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/list`
 */
const v1GitlabListRequestConfig: V1GitlabListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/v1/gitlab/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['current', 'limit', 'description', 'is_privatization_project'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1GitlabList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 项目列表 的 **请求函数**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/list`
 */
export const v1GitlabList = /*#__PURE__*/ (requestData: V1GitlabListRequest, ...args: UserRequestRestArgs) => {
  return request<V1GitlabListResponse>(prepare(v1GitlabListRequestConfig, requestData), ...args);
};

v1GitlabList.requestConfig = v1GitlabListRequestConfig;

/**
 * 接口 设置项目名称 的 **请求类型**
 *
 * @分类 Gitlab
 * @请求头 `POST /v1/gitlab/update`
 */
export interface V1GitlabUpdateRequest {
  /**
   * id
   */
  id: number;
  /**
   * 名称
   */
  name: string;
  /**
   * Gitlab 仓库名称
   */
  repo_name: string;
}

/**
 * 接口 设置项目名称 的 **返回类型**
 *
 * @分类 Gitlab
 * @请求头 `POST /v1/gitlab/update`
 */
export interface V1GitlabUpdateResponse {}

/**
 * 接口 设置项目名称 的 **请求配置的类型**
 *
 * @分类 Gitlab
 * @请求头 `POST /v1/gitlab/update`
 */
type V1GitlabUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/gitlab/update', 'data', string, string, false>
>;

/**
 * 接口 设置项目名称 的 **请求配置**
 *
 * @分类 Gitlab
 * @请求头 `POST /v1/gitlab/update`
 */
const v1GitlabUpdateRequestConfig: V1GitlabUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/v1/gitlab/update',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1GitlabUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 设置项目名称 的 **请求函数**
 *
 * @分类 Gitlab
 * @请求头 `POST /v1/gitlab/update`
 */
export const v1GitlabUpdate = /*#__PURE__*/ (requestData: V1GitlabUpdateRequest, ...args: UserRequestRestArgs) => {
  return request<V1GitlabUpdateResponse>(prepare(v1GitlabUpdateRequestConfig, requestData), ...args);
};

v1GitlabUpdate.requestConfig = v1GitlabUpdateRequestConfig;

/**
 * 接口 设置项目是否私有化 的 **请求类型**
 *
 * @分类 Gitlab
 * @请求头 `POST /v1/gitlab/set`
 */
export interface V1GitlabSetRequest {
  /**
   * id
   */
  id: number;
  /**
   * 是否私有化仓库
   */
  is_privatization_project: boolean;
}

/**
 * 接口 设置项目是否私有化 的 **返回类型**
 *
 * @分类 Gitlab
 * @请求头 `POST /v1/gitlab/set`
 */
export interface V1GitlabSetResponse {}

/**
 * 接口 设置项目是否私有化 的 **请求配置的类型**
 *
 * @分类 Gitlab
 * @请求头 `POST /v1/gitlab/set`
 */
type V1GitlabSetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/gitlab/set', 'data', string, string, false>
>;

/**
 * 接口 设置项目是否私有化 的 **请求配置**
 *
 * @分类 Gitlab
 * @请求头 `POST /v1/gitlab/set`
 */
const v1GitlabSetRequestConfig: V1GitlabSetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/v1/gitlab/set',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1GitlabSet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 设置项目是否私有化 的 **请求函数**
 *
 * @分类 Gitlab
 * @请求头 `POST /v1/gitlab/set`
 */
export const v1GitlabSet = /*#__PURE__*/ (requestData: V1GitlabSetRequest, ...args: UserRequestRestArgs) => {
  return request<V1GitlabSetResponse>(prepare(v1GitlabSetRequestConfig, requestData), ...args);
};

v1GitlabSet.requestConfig = v1GitlabSetRequestConfig;

/**
 * 接口 拉取 Gitlab 项目列表 的 **请求类型**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/pullGitlabProjectList`
 */
export interface V1GitlabPullGitlabProjectListRequest {}

/**
 * 接口 拉取 Gitlab 项目列表 的 **返回类型**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/pullGitlabProjectList`
 */
export interface V1GitlabPullGitlabProjectListResponse {}

/**
 * 接口 拉取 Gitlab 项目列表 的 **请求配置的类型**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/pullGitlabProjectList`
 */
type V1GitlabPullGitlabProjectListRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/v1/gitlab/pullGitlabProjectList',
    'data',
    string,
    string,
    true
  >
>;

/**
 * 接口 拉取 Gitlab 项目列表 的 **请求配置**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/pullGitlabProjectList`
 */
const v1GitlabPullGitlabProjectListRequestConfig: V1GitlabPullGitlabProjectListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/v1/gitlab/pullGitlabProjectList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1GitlabPullGitlabProjectList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 拉取 Gitlab 项目列表 的 **请求函数**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/pullGitlabProjectList`
 */
export const v1GitlabPullGitlabProjectList = /*#__PURE__*/ (
  requestData?: V1GitlabPullGitlabProjectListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<V1GitlabPullGitlabProjectListResponse>(
    prepare(v1GitlabPullGitlabProjectListRequestConfig, requestData),
    ...args
  );
};

v1GitlabPullGitlabProjectList.requestConfig = v1GitlabPullGitlabProjectListRequestConfig;

/**
 * 接口 DTO生成测试 的 **请求类型**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/test`
 */
export interface V1GitlabTestRequest {}

/**
 * 接口 DTO生成测试 的 **返回类型**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/test`
 */
export interface V1GitlabTestResponse {}

/**
 * 接口 DTO生成测试 的 **请求配置的类型**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/test`
 */
type V1GitlabTestRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/gitlab/test', 'data', string, string, true>
>;

/**
 * 接口 DTO生成测试 的 **请求配置**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/test`
 */
const v1GitlabTestRequestConfig: V1GitlabTestRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/v1/gitlab/test',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1GitlabTest',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 DTO生成测试 的 **请求函数**
 *
 * @分类 Gitlab
 * @请求头 `GET /v1/gitlab/test`
 */
export const v1GitlabTest = /*#__PURE__*/ (requestData?: V1GitlabTestRequest, ...args: UserRequestRestArgs) => {
  return request<V1GitlabTestResponse>(prepare(v1GitlabTestRequestConfig, requestData), ...args);
};

v1GitlabTest.requestConfig = v1GitlabTestRequestConfig;

const mockUrl_0_0_0_1 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_1 = '' as any;
const prodUrl_0_0_0_1 = '' as any;
const dataKey_0_0_0_1 = 'data' as any;

/**
 * 接口 \/v1\/secret\/create 的 **请求类型**
 *
 * @分类 密钥
 * @请求头 `POST /v1/secret/create`
 */
export interface V1SecretCreateRequest {
  /**
   * Gitlab密钥
   */
  secret: string;
  /**
   * 花名
   */
  name: string;
}

/**
 * 接口 \/v1\/secret\/create 的 **返回类型**
 *
 * @分类 密钥
 * @请求头 `POST /v1/secret/create`
 */
export interface V1SecretCreateResponse {}

/**
 * 接口 \/v1\/secret\/create 的 **请求配置的类型**
 *
 * @分类 密钥
 * @请求头 `POST /v1/secret/create`
 */
type V1SecretCreateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/secret/create', 'data', string, string, false>
>;

/**
 * 接口 \/v1\/secret\/create 的 **请求配置**
 *
 * @分类 密钥
 * @请求头 `POST /v1/secret/create`
 */
const v1SecretCreateRequestConfig: V1SecretCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/v1/secret/create',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1SecretCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/secret\/create 的 **请求函数**
 *
 * @分类 密钥
 * @请求头 `POST /v1/secret/create`
 */
export const v1SecretCreate = /*#__PURE__*/ (requestData: V1SecretCreateRequest, ...args: UserRequestRestArgs) => {
  return request<V1SecretCreateResponse>(prepare(v1SecretCreateRequestConfig, requestData), ...args);
};

v1SecretCreate.requestConfig = v1SecretCreateRequestConfig;

/**
 * 接口 \/v1\/secret\/upate 的 **请求类型**
 *
 * @分类 密钥
 * @请求头 `POST /v1/secret/upate`
 */
export interface V1SecretUpateRequest {
  /**
   * Gitlab密钥
   */
  secret: string;
  /**
   * 花名
   */
  name: string;
  /**
   * id
   */
  id: number;
}

/**
 * 接口 \/v1\/secret\/upate 的 **返回类型**
 *
 * @分类 密钥
 * @请求头 `POST /v1/secret/upate`
 */
export type V1SecretUpateResponse = any;

/**
 * 接口 \/v1\/secret\/upate 的 **请求配置的类型**
 *
 * @分类 密钥
 * @请求头 `POST /v1/secret/upate`
 */
type V1SecretUpateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/secret/upate', 'data', string, string, false>
>;

/**
 * 接口 \/v1\/secret\/upate 的 **请求配置**
 *
 * @分类 密钥
 * @请求头 `POST /v1/secret/upate`
 */
const v1SecretUpateRequestConfig: V1SecretUpateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/v1/secret/upate',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1SecretUpate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/secret\/upate 的 **请求函数**
 *
 * @分类 密钥
 * @请求头 `POST /v1/secret/upate`
 */
export const v1SecretUpate = /*#__PURE__*/ (requestData: V1SecretUpateRequest, ...args: UserRequestRestArgs) => {
  return request<V1SecretUpateResponse>(prepare(v1SecretUpateRequestConfig, requestData), ...args);
};

v1SecretUpate.requestConfig = v1SecretUpateRequestConfig;

/**
 * 接口 \/v1\/secret\/find 的 **请求类型**
 *
 * @分类 密钥
 * @请求头 `GET /v1/secret/find`
 */
export interface V1SecretFindRequest {}

/**
 * 接口 \/v1\/secret\/find 的 **返回类型**
 *
 * @分类 密钥
 * @请求头 `GET /v1/secret/find`
 */
export interface V1SecretFindResponse {
  /**
   * Gitlab密钥
   */
  secret: string;
  /**
   * 花名
   */
  name: string;
  /**
   * id
   */
  id: number;
}

/**
 * 接口 \/v1\/secret\/find 的 **请求配置的类型**
 *
 * @分类 密钥
 * @请求头 `GET /v1/secret/find`
 */
type V1SecretFindRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/secret/find', 'data', string, string, true>
>;

/**
 * 接口 \/v1\/secret\/find 的 **请求配置**
 *
 * @分类 密钥
 * @请求头 `GET /v1/secret/find`
 */
const v1SecretFindRequestConfig: V1SecretFindRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/v1/secret/find',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1SecretFind',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/secret\/find 的 **请求函数**
 *
 * @分类 密钥
 * @请求头 `GET /v1/secret/find`
 */
export const v1SecretFind = /*#__PURE__*/ (requestData?: V1SecretFindRequest, ...args: UserRequestRestArgs) => {
  return request<V1SecretFindResponse>(prepare(v1SecretFindRequestConfig, requestData), ...args);
};

v1SecretFind.requestConfig = v1SecretFindRequestConfig;

const mockUrl_0_0_0_2 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_2 = '' as any;
const prodUrl_0_0_0_2 = '' as any;
const dataKey_0_0_0_2 = 'data' as any;

/**
 * 接口 \/v1\/permission\/create 的 **请求类型**
 *
 * @分类 权限管理
 * @请求头 `POST /v1/permission/create`
 */
export interface V1PermissionCreateRequest {
  /**
   * 权限 code
   */
  code: string;
  /**
   * 权限名称
   */
  name: string;
  /**
   * 权限描述
   */
  description: string;
  /**
   * 权限类型
   */
  type: 'MENU' | 'BUTTON';
}

/**
 * 接口 \/v1\/permission\/create 的 **返回类型**
 *
 * @分类 权限管理
 * @请求头 `POST /v1/permission/create`
 */
export type V1PermissionCreateResponse = any;

/**
 * 接口 \/v1\/permission\/create 的 **请求配置的类型**
 *
 * @分类 权限管理
 * @请求头 `POST /v1/permission/create`
 */
type V1PermissionCreateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/permission/create', 'data', string, string, false>
>;

/**
 * 接口 \/v1\/permission\/create 的 **请求配置**
 *
 * @分类 权限管理
 * @请求头 `POST /v1/permission/create`
 */
const v1PermissionCreateRequestConfig: V1PermissionCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/v1/permission/create',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1PermissionCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/permission\/create 的 **请求函数**
 *
 * @分类 权限管理
 * @请求头 `POST /v1/permission/create`
 */
export const v1PermissionCreate = /*#__PURE__*/ (
  requestData: V1PermissionCreateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<V1PermissionCreateResponse>(prepare(v1PermissionCreateRequestConfig, requestData), ...args);
};

v1PermissionCreate.requestConfig = v1PermissionCreateRequestConfig;

/**
 * 接口 \/v1\/permission\/list 的 **请求类型**
 *
 * @分类 权限管理
 * @请求头 `GET /v1/permission/list`
 */
export interface V1PermissionListRequest {}

/**
 * 接口 \/v1\/permission\/list 的 **返回类型**
 *
 * @分类 权限管理
 * @请求头 `GET /v1/permission/list`
 */
export type V1PermissionListResponse = any;

/**
 * 接口 \/v1\/permission\/list 的 **请求配置的类型**
 *
 * @分类 权限管理
 * @请求头 `GET /v1/permission/list`
 */
type V1PermissionListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/permission/list', 'data', string, string, true>
>;

/**
 * 接口 \/v1\/permission\/list 的 **请求配置**
 *
 * @分类 权限管理
 * @请求头 `GET /v1/permission/list`
 */
const v1PermissionListRequestConfig: V1PermissionListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/v1/permission/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1PermissionList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/permission\/list 的 **请求函数**
 *
 * @分类 权限管理
 * @请求头 `GET /v1/permission/list`
 */
export const v1PermissionList = /*#__PURE__*/ (requestData?: V1PermissionListRequest, ...args: UserRequestRestArgs) => {
  return request<V1PermissionListResponse>(prepare(v1PermissionListRequestConfig, requestData), ...args);
};

v1PermissionList.requestConfig = v1PermissionListRequestConfig;

/**
 * 接口 \/v1\/permission\/item 的 **请求类型**
 *
 * @分类 权限管理
 * @请求头 `GET /v1/permission/item`
 */
export interface V1PermissionItemRequest {
  id: string;
}

/**
 * 接口 \/v1\/permission\/item 的 **返回类型**
 *
 * @分类 权限管理
 * @请求头 `GET /v1/permission/item`
 */
export type V1PermissionItemResponse = any;

/**
 * 接口 \/v1\/permission\/item 的 **请求配置的类型**
 *
 * @分类 权限管理
 * @请求头 `GET /v1/permission/item`
 */
type V1PermissionItemRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/permission/item', 'data', string, 'id', false>
>;

/**
 * 接口 \/v1\/permission\/item 的 **请求配置**
 *
 * @分类 权限管理
 * @请求头 `GET /v1/permission/item`
 */
const v1PermissionItemRequestConfig: V1PermissionItemRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/v1/permission/item',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1PermissionItem',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/permission\/item 的 **请求函数**
 *
 * @分类 权限管理
 * @请求头 `GET /v1/permission/item`
 */
export const v1PermissionItem = /*#__PURE__*/ (requestData: V1PermissionItemRequest, ...args: UserRequestRestArgs) => {
  return request<V1PermissionItemResponse>(prepare(v1PermissionItemRequestConfig, requestData), ...args);
};

v1PermissionItem.requestConfig = v1PermissionItemRequestConfig;

/**
 * 接口 \/v1\/permission\/update 的 **请求类型**
 *
 * @分类 权限管理
 * @请求头 `PATCH /v1/permission/update`
 */
export interface V1PermissionUpdateRequest {
  /**
   * 权限 code
   */
  code?: string;
  /**
   * 权限名称
   */
  name?: string;
  /**
   * 权限描述
   */
  description?: string;
  /**
   * 权限类型
   */
  type?: 'MENU' | 'BUTTON';
  /**
   * 权限 id
   */
  permissionId: number;
}

/**
 * 接口 \/v1\/permission\/update 的 **返回类型**
 *
 * @分类 权限管理
 * @请求头 `PATCH /v1/permission/update`
 */
export type V1PermissionUpdateResponse = any;

/**
 * 接口 \/v1\/permission\/update 的 **请求配置的类型**
 *
 * @分类 权限管理
 * @请求头 `PATCH /v1/permission/update`
 */
type V1PermissionUpdateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/permission/update', 'data', string, string, false>
>;

/**
 * 接口 \/v1\/permission\/update 的 **请求配置**
 *
 * @分类 权限管理
 * @请求头 `PATCH /v1/permission/update`
 */
const v1PermissionUpdateRequestConfig: V1PermissionUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/v1/permission/update',
  method: Method.PATCH,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1PermissionUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/permission\/update 的 **请求函数**
 *
 * @分类 权限管理
 * @请求头 `PATCH /v1/permission/update`
 */
export const v1PermissionUpdate = /*#__PURE__*/ (
  requestData: V1PermissionUpdateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<V1PermissionUpdateResponse>(prepare(v1PermissionUpdateRequestConfig, requestData), ...args);
};

v1PermissionUpdate.requestConfig = v1PermissionUpdateRequestConfig;

/**
 * 接口 \/v1\/permission\/delete 的 **请求类型**
 *
 * @分类 权限管理
 * @请求头 `DELETE /v1/permission/delete`
 */
export interface V1PermissionDeleteRequest {}

/**
 * 接口 \/v1\/permission\/delete 的 **返回类型**
 *
 * @分类 权限管理
 * @请求头 `DELETE /v1/permission/delete`
 */
export type V1PermissionDeleteResponse = any;

/**
 * 接口 \/v1\/permission\/delete 的 **请求配置的类型**
 *
 * @分类 权限管理
 * @请求头 `DELETE /v1/permission/delete`
 */
type V1PermissionDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/permission/delete', 'data', string, string, true>
>;

/**
 * 接口 \/v1\/permission\/delete 的 **请求配置**
 *
 * @分类 权限管理
 * @请求头 `DELETE /v1/permission/delete`
 */
const v1PermissionDeleteRequestConfig: V1PermissionDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/v1/permission/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1PermissionDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/permission\/delete 的 **请求函数**
 *
 * @分类 权限管理
 * @请求头 `DELETE /v1/permission/delete`
 */
export const v1PermissionDelete = /*#__PURE__*/ (
  requestData?: V1PermissionDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<V1PermissionDeleteResponse>(prepare(v1PermissionDeleteRequestConfig, requestData), ...args);
};

v1PermissionDelete.requestConfig = v1PermissionDeleteRequestConfig;

const mockUrl_0_0_0_3 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_3 = '' as any;
const prodUrl_0_0_0_3 = '' as any;
const dataKey_0_0_0_3 = 'data' as any;

/**
 * 接口 \/v1\/user\/create 的 **请求类型**
 *
 * @分类 用户管理
 * @请求头 `POST /v1/user/create`
 */
export interface V1UserCreateRequest {
  /**
   * 邮箱
   */
  email: string;
}

/**
 * 接口 \/v1\/user\/create 的 **返回类型**
 *
 * @分类 用户管理
 * @请求头 `POST /v1/user/create`
 */
export type V1UserCreateResponse = any;

/**
 * 接口 \/v1\/user\/create 的 **请求配置的类型**
 *
 * @分类 用户管理
 * @请求头 `POST /v1/user/create`
 */
type V1UserCreateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/user/create', 'data', string, string, false>
>;

/**
 * 接口 \/v1\/user\/create 的 **请求配置**
 *
 * @分类 用户管理
 * @请求头 `POST /v1/user/create`
 */
const v1UserCreateRequestConfig: V1UserCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/v1/user/create',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1UserCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/user\/create 的 **请求函数**
 *
 * @分类 用户管理
 * @请求头 `POST /v1/user/create`
 */
export const v1UserCreate = /*#__PURE__*/ (requestData: V1UserCreateRequest, ...args: UserRequestRestArgs) => {
  return request<V1UserCreateResponse>(prepare(v1UserCreateRequestConfig, requestData), ...args);
};

v1UserCreate.requestConfig = v1UserCreateRequestConfig;

/**
 * 接口 \/v1\/user\/item 的 **请求类型**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/item`
 */
export interface V1UserItemRequest {
  /**
   * 用户ID
   */
  userId: string;
  /**
   * 邮箱
   */
  email: string;
}

/**
 * 接口 \/v1\/user\/item 的 **返回类型**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/item`
 */
export type V1UserItemResponse = any;

/**
 * 接口 \/v1\/user\/item 的 **请求配置的类型**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/item`
 */
type V1UserItemRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/user/item', 'data', string, 'userId' | 'email', false>
>;

/**
 * 接口 \/v1\/user\/item 的 **请求配置**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/item`
 */
const v1UserItemRequestConfig: V1UserItemRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/v1/user/item',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['userId', 'email'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1UserItem',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/user\/item 的 **请求函数**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/item`
 */
export const v1UserItem = /*#__PURE__*/ (requestData: V1UserItemRequest, ...args: UserRequestRestArgs) => {
  return request<V1UserItemResponse>(prepare(v1UserItemRequestConfig, requestData), ...args);
};

v1UserItem.requestConfig = v1UserItemRequestConfig;

/**
 * 接口 \/v1\/user\/self 的 **请求类型**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/self`
 */
export interface V1UserSelfRequest {
  /**
   * 用户ID
   */
  userId: string;
  /**
   * 邮箱
   */
  email: string;
}

/**
 * 接口 \/v1\/user\/self 的 **返回类型**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/self`
 */
export type V1UserSelfResponse = any;

/**
 * 接口 \/v1\/user\/self 的 **请求配置的类型**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/self`
 */
type V1UserSelfRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/user/self', 'data', string, 'userId' | 'email', false>
>;

/**
 * 接口 \/v1\/user\/self 的 **请求配置**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/self`
 */
const v1UserSelfRequestConfig: V1UserSelfRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/v1/user/self',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['userId', 'email'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1UserSelf',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/user\/self 的 **请求函数**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/self`
 */
export const v1UserSelf = /*#__PURE__*/ (requestData: V1UserSelfRequest, ...args: UserRequestRestArgs) => {
  return request<V1UserSelfResponse>(prepare(v1UserSelfRequestConfig, requestData), ...args);
};

v1UserSelf.requestConfig = v1UserSelfRequestConfig;

/**
 * 接口 \/v1\/user\/getWorkSpace 的 **请求类型**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/getWorkSpace`
 */
export interface V1UserGetWorkSpaceRequest {}

/**
 * 接口 \/v1\/user\/getWorkSpace 的 **返回类型**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/getWorkSpace`
 */
export type V1UserGetWorkSpaceResponse = any;

/**
 * 接口 \/v1\/user\/getWorkSpace 的 **请求配置的类型**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/getWorkSpace`
 */
type V1UserGetWorkSpaceRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/user/getWorkSpace', 'data', string, string, true>
>;

/**
 * 接口 \/v1\/user\/getWorkSpace 的 **请求配置**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/getWorkSpace`
 */
const v1UserGetWorkSpaceRequestConfig: V1UserGetWorkSpaceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/v1/user/getWorkSpace',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1UserGetWorkSpace',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/user\/getWorkSpace 的 **请求函数**
 *
 * @分类 用户管理
 * @请求头 `GET /v1/user/getWorkSpace`
 */
export const v1UserGetWorkSpace = /*#__PURE__*/ (
  requestData?: V1UserGetWorkSpaceRequest,
  ...args: UserRequestRestArgs
) => {
  return request<V1UserGetWorkSpaceResponse>(prepare(v1UserGetWorkSpaceRequestConfig, requestData), ...args);
};

v1UserGetWorkSpace.requestConfig = v1UserGetWorkSpaceRequestConfig;

/**
 * 接口 \/v1\/user\/setWorkSpace 的 **请求类型**
 *
 * @分类 用户管理
 * @请求头 `POST /v1/user/setWorkSpace`
 */
export interface V1UserSetWorkSpaceRequest {
  /**
   * 私有化工作目录
   */
  work_space: string;
}

/**
 * 接口 \/v1\/user\/setWorkSpace 的 **返回类型**
 *
 * @分类 用户管理
 * @请求头 `POST /v1/user/setWorkSpace`
 */
export type V1UserSetWorkSpaceResponse = any;

/**
 * 接口 \/v1\/user\/setWorkSpace 的 **请求配置的类型**
 *
 * @分类 用户管理
 * @请求头 `POST /v1/user/setWorkSpace`
 */
type V1UserSetWorkSpaceRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/user/setWorkSpace', 'data', string, string, false>
>;

/**
 * 接口 \/v1\/user\/setWorkSpace 的 **请求配置**
 *
 * @分类 用户管理
 * @请求头 `POST /v1/user/setWorkSpace`
 */
const v1UserSetWorkSpaceRequestConfig: V1UserSetWorkSpaceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/v1/user/setWorkSpace',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1UserSetWorkSpace',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/user\/setWorkSpace 的 **请求函数**
 *
 * @分类 用户管理
 * @请求头 `POST /v1/user/setWorkSpace`
 */
export const v1UserSetWorkSpace = /*#__PURE__*/ (
  requestData: V1UserSetWorkSpaceRequest,
  ...args: UserRequestRestArgs
) => {
  return request<V1UserSetWorkSpaceResponse>(prepare(v1UserSetWorkSpaceRequestConfig, requestData), ...args);
};

v1UserSetWorkSpace.requestConfig = v1UserSetWorkSpaceRequestConfig;

const mockUrl_0_0_0_4 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_4 = '' as any;
const prodUrl_0_0_0_4 = '' as any;
const dataKey_0_0_0_4 = 'data' as any;

/**
 * 接口 \/v1\/role 的 **请求类型**
 *
 * @分类 角色管理
 * @请求头 `POST /v1/role`
 */
export interface V1RoleRequest {}

/**
 * 接口 \/v1\/role 的 **返回类型**
 *
 * @分类 角色管理
 * @请求头 `POST /v1/role`
 */
export type V1RoleResponse = any;

/**
 * 接口 \/v1\/role 的 **请求配置的类型**
 *
 * @分类 角色管理
 * @请求头 `POST /v1/role`
 */
type V1RoleRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/role', 'data', string, string, true>
>;

/**
 * 接口 \/v1\/role 的 **请求配置**
 *
 * @分类 角色管理
 * @请求头 `POST /v1/role`
 */
const v1RoleRequestConfig: V1RoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/v1/role',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1Role',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/role 的 **请求函数**
 *
 * @分类 角色管理
 * @请求头 `POST /v1/role`
 */
export const v1Role = /*#__PURE__*/ (requestData?: V1RoleRequest, ...args: UserRequestRestArgs) => {
  return request<V1RoleResponse>(prepare(v1RoleRequestConfig, requestData), ...args);
};

v1Role.requestConfig = v1RoleRequestConfig;

const mockUrl_0_0_0_5 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_5 = '' as any;
const prodUrl_0_0_0_5 = '' as any;
const dataKey_0_0_0_5 = 'data' as any;

/**
 * 接口 \/v1\/center\/sendEmailCode 的 **请求类型**
 *
 * @分类 鉴权中心
 * @请求头 `POST /v1/center/sendEmailCode`
 */
export interface V1CenterSendEmailCodeRequest {
  /**
   * 邮箱
   */
  email: string;
}

/**
 * 接口 \/v1\/center\/sendEmailCode 的 **返回类型**
 *
 * @分类 鉴权中心
 * @请求头 `POST /v1/center/sendEmailCode`
 */
export type V1CenterSendEmailCodeResponse = any;

/**
 * 接口 \/v1\/center\/sendEmailCode 的 **请求配置的类型**
 *
 * @分类 鉴权中心
 * @请求头 `POST /v1/center/sendEmailCode`
 */
type V1CenterSendEmailCodeRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/center/sendEmailCode', 'data', string, string, false>
>;

/**
 * 接口 \/v1\/center\/sendEmailCode 的 **请求配置**
 *
 * @分类 鉴权中心
 * @请求头 `POST /v1/center/sendEmailCode`
 */
const v1CenterSendEmailCodeRequestConfig: V1CenterSendEmailCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/v1/center/sendEmailCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1CenterSendEmailCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/center\/sendEmailCode 的 **请求函数**
 *
 * @分类 鉴权中心
 * @请求头 `POST /v1/center/sendEmailCode`
 */
export const v1CenterSendEmailCode = /*#__PURE__*/ (
  requestData: V1CenterSendEmailCodeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<V1CenterSendEmailCodeResponse>(prepare(v1CenterSendEmailCodeRequestConfig, requestData), ...args);
};

v1CenterSendEmailCode.requestConfig = v1CenterSendEmailCodeRequestConfig;

/**
 * 接口 \/v1\/center\/login 的 **请求类型**
 *
 * @分类 鉴权中心
 * @请求头 `POST /v1/center/login`
 */
export interface V1CenterLoginRequest {
  /**
   * 登录邮箱
   */
  email: string;
  /**
   * 邮箱验证码
   */
  code: string;
}

/**
 * 接口 \/v1\/center\/login 的 **返回类型**
 *
 * @分类 鉴权中心
 * @请求头 `POST /v1/center/login`
 */
export interface V1CenterLoginResponse {
  /**
   * 登录邮箱
   */
  email: string;
  /**
   * 用户id
   */
  id: number;
  /**
   * token
   */
  access_token: string;
}

/**
 * 接口 \/v1\/center\/login 的 **请求配置的类型**
 *
 * @分类 鉴权中心
 * @请求头 `POST /v1/center/login`
 */
type V1CenterLoginRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/center/login', 'data', string, string, false>
>;

/**
 * 接口 \/v1\/center\/login 的 **请求配置**
 *
 * @分类 鉴权中心
 * @请求头 `POST /v1/center/login`
 */
const v1CenterLoginRequestConfig: V1CenterLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/v1/center/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1CenterLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/center\/login 的 **请求函数**
 *
 * @分类 鉴权中心
 * @请求头 `POST /v1/center/login`
 */
export const v1CenterLogin = /*#__PURE__*/ (requestData: V1CenterLoginRequest, ...args: UserRequestRestArgs) => {
  return request<V1CenterLoginResponse>(prepare(v1CenterLoginRequestConfig, requestData), ...args);
};

v1CenterLogin.requestConfig = v1CenterLoginRequestConfig;

const mockUrl_0_0_0_6 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_6 = '' as any;
const prodUrl_0_0_0_6 = '' as any;
const dataKey_0_0_0_6 = 'data' as any;

/**
 * 接口 \/v1\/deployment\/create 的 **请求类型**
 *
 * @分类 私有化部署
 * @请求头 `POST /v1/deployment/create`
 */
export interface V1DeploymentCreateRequest {}

/**
 * 接口 \/v1\/deployment\/create 的 **返回类型**
 *
 * @分类 私有化部署
 * @请求头 `POST /v1/deployment/create`
 */
export type V1DeploymentCreateResponse = any;

/**
 * 接口 \/v1\/deployment\/create 的 **请求配置的类型**
 *
 * @分类 私有化部署
 * @请求头 `POST /v1/deployment/create`
 */
type V1DeploymentCreateRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/deployment/create', 'data', string, string, true>
>;

/**
 * 接口 \/v1\/deployment\/create 的 **请求配置**
 *
 * @分类 私有化部署
 * @请求头 `POST /v1/deployment/create`
 */
const v1DeploymentCreateRequestConfig: V1DeploymentCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/v1/deployment/create',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1DeploymentCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/deployment\/create 的 **请求函数**
 *
 * @分类 私有化部署
 * @请求头 `POST /v1/deployment/create`
 */
export const v1DeploymentCreate = /*#__PURE__*/ (
  requestData?: V1DeploymentCreateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<V1DeploymentCreateResponse>(prepare(v1DeploymentCreateRequestConfig, requestData), ...args);
};

v1DeploymentCreate.requestConfig = v1DeploymentCreateRequestConfig;

/**
 * 接口 \/v1\/deployment\/list 的 **请求类型**
 *
 * @分类 私有化部署
 * @请求头 `GET /v1/deployment/list`
 */
export interface V1DeploymentListRequest {}

/**
 * 接口 \/v1\/deployment\/list 的 **返回类型**
 *
 * @分类 私有化部署
 * @请求头 `GET /v1/deployment/list`
 */
export type V1DeploymentListResponse = any;

/**
 * 接口 \/v1\/deployment\/list 的 **请求配置的类型**
 *
 * @分类 私有化部署
 * @请求头 `GET /v1/deployment/list`
 */
type V1DeploymentListRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/v1/deployment/list', 'data', string, string, true>
>;

/**
 * 接口 \/v1\/deployment\/list 的 **请求配置**
 *
 * @分类 私有化部署
 * @请求头 `GET /v1/deployment/list`
 */
const v1DeploymentListRequestConfig: V1DeploymentListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/v1/deployment/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.raw,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'v1DeploymentList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/v1\/deployment\/list 的 **请求函数**
 *
 * @分类 私有化部署
 * @请求头 `GET /v1/deployment/list`
 */
export const v1DeploymentList = /*#__PURE__*/ (requestData?: V1DeploymentListRequest, ...args: UserRequestRestArgs) => {
  return request<V1DeploymentListResponse>(prepare(v1DeploymentListRequestConfig, requestData), ...args);
};

v1DeploymentList.requestConfig = v1DeploymentListRequestConfig;

/* prettier-ignore-end */
