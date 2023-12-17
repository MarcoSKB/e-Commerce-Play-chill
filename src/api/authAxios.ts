import axios from "axios";

export const authAxios = axios.create({
  baseURL: "/api/auth",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
