"use client";

import { getGameAxios } from "@/src/api/getGameAxios";
import { genres } from "@/src/types/GameDataInfo";
import useAxios from "@/src/hooks/useAxios";
import { getValuesFromObjects } from "@/src/utils/getValuesFromObjects";

interface Props {
  genresData: genres[];
}

const GameRecommended: React.FC<Props> = ({ genresData }) => {
  const [games, error, loading] = useAxios({
    url: "",
    method: "GET",
    axiosInstance: getGameAxios,
    requestConfig: {
      params: {
        genres: getValuesFromObjects<genres>(genresData, "slug"),
      },
    },
  });
  console.log(games);
  return <div>GameRecommended</div>;
};

export default GameRecommended;
