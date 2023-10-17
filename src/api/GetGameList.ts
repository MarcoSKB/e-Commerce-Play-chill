import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const urlAPI = "https://rawg.io/api/games";

export const getGameAxios = axios.create({
  baseURL: urlAPI,
  params: {
    "token&key": API_KEY,
  },
});
