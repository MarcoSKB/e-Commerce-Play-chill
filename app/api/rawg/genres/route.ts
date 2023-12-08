import { NextRequest } from "next/server";
import axios, { AxiosError } from "axios";

export const GET = async (req: NextRequest) => {
  try {
    const apiKey = process.env.RAWG_API_KEY;
    const apiUrl = "https://rawg.io/api/genres";

    const response = await axios.get(apiUrl, {
      params: {
        key: apiKey,
      },
    });

    const res = { ...response.data, next: null };
    return Response.json(res, {
      status: 200,
    });
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response?.status === 404) {
      return Response.json(
        { error: axiosError.response.data },
        { status: axiosError.response.status }
      );
    } else if (axiosError.request) {
      return Response.json(
        { error: "Error fetching data from RAWG API" },
        { status: 500 }
      );
    } else {
      return Response.json({ error: "Internal Server Error" }, { status: 505 });
    }
  }
};
