import React, { useEffect, useState } from "react";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface IConfig {
  url: string;
  method: string;
  axiosInstance: AxiosInstance;
  requestConfig: AxiosRequestConfig;
}

export const useAxios = (config: IConfig) => {
  const { url, method, axiosInstance, requestConfig = {} } = config;

  const [response, setResponse] = useState<[]>([]);
  const [error, setError] = useState<unknown>("");
  const [loading, setLoading] = useState<boolean>(true);

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
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  return [response, error, loading];
};

export default useAxios;
