import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = `https://rawg.io/api/games`;

export const getGameAxios = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
