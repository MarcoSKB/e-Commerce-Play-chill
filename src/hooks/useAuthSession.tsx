import { Session } from "next-auth";
import useAxios from "./useAxios";
import { authAxios } from "../api/authAxios";

export default function useAuthSession(dependency?: unknown[]) {
  const [session, _, loading] = useAxios<Session>({
    url: "/session",
    method: "GET",
    axiosInstance: authAxios,
    dependency,
  });
  return [session, loading] as const;
}
