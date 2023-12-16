import axios from "axios";

export const getReviewsAxios = axios.create({
  baseURL: "/api/reviews",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
