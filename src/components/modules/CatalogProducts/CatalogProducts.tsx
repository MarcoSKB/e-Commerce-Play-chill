"use client";
import React from "react";
import { getGameAxios } from "@/src/api/GetGameList";
import useAxios from "@/src/hooks/useAxios";
import { GameDataResponse } from "@/src/types/GameDataResponse";
import { GamesList } from "@/src/components/elements";

const CatalogProducts = () => {
  const { response, error, loading } = useAxios<GameDataResponse>({
    axiosInstance: getGameAxios,
    method: "GET",
    url: "",
  });

  return (
    <div>
      <h1>Product catalog</h1>
      {response && (
        <GamesList
          className="flex gap-x-5 gap-y-14 flex-wrap justify-evenly"
          data={response.results}
        />
      )}
    </div>
  );
};

export default CatalogProducts;
