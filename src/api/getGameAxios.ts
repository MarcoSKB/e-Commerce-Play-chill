import axios from "axios";

export const getGameAxios = axios.create({
  baseURL: "/api/games",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
