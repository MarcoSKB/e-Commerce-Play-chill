"use client";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";

import useAxios from "@/src/hooks/useAxios";
import { GamesList } from "@/src/components/elements";

const CatalogProducts = () => {
  const [games, error, loading] = useAxios<GamePreviewData>({
    axiosInstance: getGameAxios,
    method: "GET",
    url: "",
  });

  return <>{games && <GamesList data={games.results} />}</>;
};

export default CatalogProducts;
