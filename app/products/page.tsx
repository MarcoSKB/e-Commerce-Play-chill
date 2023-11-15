"use client";
import { useState } from "react";

import useAxios from "@/src/hooks/useAxios";
import { getGameAxios } from "@/src/api/getGameAxios";

import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";
import { FiltersType } from "@/src/types/FiltersType";
import { removeEmptyStringProperties } from "@/src/utils/removeEmptyStrings";

import { GameFilters } from "@/src/components/modules";
import { Container, FilterByOrder, GamesList } from "@/src/components/elements";

const Products = () => {
  const [filters, setFilters] = useState<FiltersType>({
    search: "",
    metacritic: "",
    genres: "",
    tags: "",
    platforms: "",
    ordering: "",
  });
  const [games, error, loading] = useAxios<GamePreviewData>({
    url: "",
    method: "GET",
    axiosInstance: getGameAxios,
    dependency: [filters],
    requestConfig: {
      params: {
        ...removeEmptyStringProperties(filters),
        page_size: "12",
      },
    },
  });

  return (
    <Container className="flex gap-5 pt-[80px]">
      <GameFilters setFilters={setFilters} filters={filters} />
      <div className="w-full">
        <div className="flex justify-between items-center max-w-full mb-10">
          <h1 className="font-bold text-4xl">Product catalog</h1>
          <FilterByOrder setFilters={setFilters} filters={filters} />
        </div>
        {games && (
          <GamesList className="flex flex-wrap gap-5" data={games.results} />
        )}
      </div>
    </Container>
  );
};

export default Products;
