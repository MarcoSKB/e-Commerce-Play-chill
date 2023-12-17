import axios from "axios";

export const reviewsAxios = axios.create({
  baseURL: "/api/reviews",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
