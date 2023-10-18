import { useEffect, useState } from "react";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

interface IConfig {
  url: string;
  method: AxiosRequestConfig["method"];
  axiosInstance: AxiosInstance;
  requestConfig?: AxiosRequestConfig;
}
type AxiosLoading = boolean;

export function useAxios<T>(config: IConfig) {
  const { url = "", method, axiosInstance, requestConfig = {} } = config;

  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<AxiosLoading>(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await axiosInstance(url, {
          ...requestConfig,
          method,
        });
        setResponse(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  return { response, error, loading };
}

export default useAxios;
