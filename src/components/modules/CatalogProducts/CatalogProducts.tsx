"use client";
import React from "react";
import { getGameAxios } from "@/src/api/getGameAxios";
import useAxios from "@/src/hooks/useAxios";
import { GamesDataResponse } from "@/src/types/GamesDataResponse";
import { GamesList } from "@/src/components/elements";

const CatalogProducts = () => {
  const { response, error, loading } = useAxios<GamesDataResponse>({
    axiosInstance: getGameAxios,
    method: "GET",
    url: "",
  });

  return (
    <div>
      <h1 className="text-4xl">Product catalog</h1>
      {response && (
        <GamesList className="grid grid-cols-3" data={response.results} />
      )}
    </div>
  );
};

export default CatalogProducts;
