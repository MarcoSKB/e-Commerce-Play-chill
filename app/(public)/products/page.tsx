"use client";
import { useState } from "react";

import useAxios from "@/src/hooks/useAxios";
import { getGameAxios } from "@/src/api/getGameAxios";

import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";
import { FiltersType } from "@/src/types/FiltersType";
import { removeEmptyStringProperties } from "@/src/utils/removeEmptyStrings";

import { Container, FilterByOrder, GamesList } from "@/src/components/elements";
import { Pagination } from "@/src/components/ui";
import { GameFilters } from "./components";

const filtersRequestData = {
  search: "",
  metacritic: "",
  genres: "",
  tags: "",
  platforms: "",
  ordering: "",
  page: 1,
};

const Products = () => {
  const [filters, setFilters] = useState<FiltersType>(filtersRequestData);
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
        <GamesList
          className="grid grid-cols-3 gap-x-5 gap-y-[60px]"
          games={games?.results}
          error={error}
          loading={loading}
        />
        <Pagination
          totalCount={games ? games.count : 60}
          currentPage={filters.page}
          perPageCount={12}
          filters={filters}
          setFilters={setFilters}
          loading={loading}
        />
      </div>
    </Container>
  );
};

export default Products;
