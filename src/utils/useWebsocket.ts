import { useEffect, useRef, useState } from 'react';

export default function useWebSocket(
  wsURl: string,
  projectId?: string | null,
  deviceKey?: string | number,
  sendValue?: any,
) {
  const ref = useRef<WebSocket>();

  // 心跳机制定时器
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const [data, setData] = useState<any>();

  useEffect(() => {
    if (wsURl && projectId && Number(deviceKey) !== -1) {
      connect();
    }
  }, [wsURl, projectId, deviceKey]);

  useEffect(() => {
    if (sendValue) {
      ref.current?.send(JSON.stringify(sendValue));
    }
  }, [sendValue]);

  // 连接
  const connect = () => {
    disconnect();
    const ws = new WebSocket(wsURl);
    ws.onopen = handleOpen;
    ws.onmessage = handleMessage;
    ws.onclose = handleClose;
    ws.onerror = handleError;
    // setWebsocket(ws);
    ref.current = ws;
    // 开启心跳机制
    keepHeartbeat(ws);
  };

  useEffect(() => {
    // console.log('websocket change', ref.current);
  }, [ref.current]);

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  // 断开链接
  const disconnect = () => {
    // console.log('websocket close', ref.current);
    ref.current && ref.current.close();
    stopHeartbeat();
  };

  // 连接成功回调
  const handleOpen = () => {
    console.log('onopen');
  };

  // 接受信息成功回调
  const handleMessage = (ws: MessageEvent) => {
    const res = ws.data;
    if (res !== 'success' && res) {
      setData(res);
    }
  };

  // 断开连接回调
  const handleClose = (e: any) => {
    stopHeartbeat();
    if (Number(e.code) === 1006) {
      console.log('重连.........');
      connect();
    }
  };

  // 错误回调
  const handleError = () => {
    stopHeartbeat();
    console.log('onerror');
  };

  // 维持心跳,
  const keepHeartbeat = (ws: WebSocket) => {
    try {
      const time = 20 * 1000; // 20s
      const t = setInterval(() => {
        // console.log('心跳.........', ws.readyState);
        if ([1].includes(ws.readyState)) {
          ws.send('ping');
        }
      }, time);
      setTimer(t);
    } catch (error) {
      console.log(error);
    }
  };

  // 清除心跳定时器
  const stopHeartbeat = () => {
    timer && clearInterval(timer);
  };

  return { data };
}
