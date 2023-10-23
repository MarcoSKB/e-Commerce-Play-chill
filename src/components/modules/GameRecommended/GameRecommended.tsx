"use client";

import { getGameAxios } from "@/src/api/getGameAxios";
import useAxios from "@/src/hooks/useAxios";

interface Props {
  genres: [];
}

const GameRecommended: React.FC<Props> = ({ genres }) => {
  const [games, error, loading] = useAxios({
    url: "",
    method: "GET",
    axiosInstance: getGameAxios,
    requestConfig: {
      params: {
        genres: genres,
      },
    },
  });
  return <div>GameRecommended</div>;
};

export default GameRecommended;
