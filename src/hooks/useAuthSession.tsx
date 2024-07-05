import { Session } from "next-auth";
import useAxios from "./useAxios";
import { authAxios } from "../api/authAxios";

export default function useAuthSession() {
  const [session, _, loading] = useAxios<Session>({
    url: "/session",
    method: "GET",
    axiosInstance: authAxios,
  });
  return [session, loading] as const;
}
