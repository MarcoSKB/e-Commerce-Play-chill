import React, { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface IConfig {
  url: string;
  method: string;
  axiosInstance: string;
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
        const response = await axios({
          method,
          url,
          ...requestConfig,
        });
        setResponse(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    return () => {};
  }, []);

  return [response, error, loading];
};

export default useAxios;
