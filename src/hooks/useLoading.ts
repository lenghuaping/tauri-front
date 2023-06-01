import { useSafeState } from 'ahooks';
import { useEffect } from 'react';

interface IuseLoading<T> {
  api: () => Promise<T>;
  manual?: boolean;
}

const useLoading = <T = any>(options: IuseLoading<T>) => {
  const { api, manual = false } = options;
  const [loading, setLoading] = useSafeState(false);
  const [data, setData] = useSafeState<T>();

  const run = () => {
    fetchApi();
  };

  const fetchApi = async () => {
    setLoading(true);
    const res = await api();
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    if (!manual) {
      fetchApi();
    }
  }, [manual]);

  return {
    data,
    run,
    loading,
    setLoading,
  };
};

export default useLoading;
