"use client";
import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

interface IConfig {
  url: string;
  method: AxiosRequestConfig["method"];
  axiosInstance: AxiosInstance;
  requestConfig?: AxiosRequestConfig;
  dependency?: unknown[];
}
type AxiosLoading = boolean;

type useAxiosResult<T> = [T | null, AxiosError | null, AxiosLoading];

export function useAxios<T = unknown>(config: IConfig): useAxiosResult<T> {
  const {
    url = "",
    method,
    axiosInstance,
    requestConfig = {},
    dependency = [],
  } = config;

  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
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
  }, [...dependency]);

  return [response, error, loading];
}

export default useAxios;
