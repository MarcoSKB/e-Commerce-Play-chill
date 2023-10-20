"use client";
import React from "react";
import { getGameAxios } from "@/src/api/getGameAxios";
import useAxios from "@/src/hooks/useAxios";
import { GamesDataResponse } from "@/src/types/GamesDataResponse";
import { Container, GamesList } from "@/src/components/elements";

const CatalogProducts = () => {
  const [games, error, loading] = useAxios<GamesDataResponse>({
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
