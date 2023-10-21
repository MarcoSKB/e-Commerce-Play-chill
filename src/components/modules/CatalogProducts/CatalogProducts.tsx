"use client";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";

import useAxios from "@/src/hooks/useAxios";
import { Container, GamesList } from "@/src/components/elements";

const CatalogProducts = () => {
  const [games, error, loading] = useAxios<GamePreviewData>({
    axiosInstance: getGameAxios,
    method: "GET",
    url: "",
  });

  return (
    <div>
      <Container>
        <h1 className="font-bold text-4xl mb-11">Product catalog</h1>
        {games && (
          <GamesList className="grid grid-cols-3" data={games.results} />
        )}
      </Container>
    </div>
  );
};

export default CatalogProducts;
