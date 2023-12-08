import axios from "axios";

const BASE_URL = `/api/rawg`;

export const rawgApiAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
