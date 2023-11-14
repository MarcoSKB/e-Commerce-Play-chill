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
    requestConfig: {
      params: {
        page_size: "12",
      },
    },
  });

  return (
    <>
      {games && (
        <GamesList className="flex flex-wrap gap-5" data={games.results} />
      )}
    </>
  );
};

export default CatalogProducts;
