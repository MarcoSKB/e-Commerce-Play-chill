"use client";
import { useState } from "react";

import useAxios from "@/src/hooks/useAxios";
import { getGameAxios } from "@/src/api/getGameAxios";

import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";
import { FiltersType } from "@/src/types/FiltersType";
import { removeEmptyStringProperties } from "@/src/utils/removeEmptyStrings";
import { lockScrollScreen } from "@/src/utils/lockScrollScreen";

import { Container, FilterByOrder, GamesList } from "@/src/components/elements";
import { Pagination } from "@/src/components/ui";
import { GameFilters, FiltersButton } from "./components";

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
  const [isOpenFilter, setIsOpenFilter] = useState(false);
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

  const toggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
    lockScrollScreen(!isOpenFilter);
  };

  return (
    <Container className="flex gap-5 pt-[24px] md:pt-[80px] overflow-x-hidden">
      <GameFilters
        setFilters={setFilters}
        filters={filters}
        isOpen={isOpenFilter}
        toggleFilter={toggleFilter}
      />
      <div className="w-full">
        <div className="flex justify-between items-center gap-y-5 flex-wrap mb-4 md:mb-10">
          <h1 className="font-bold text-3xl lg:text-4xl w-full md:w-auto">
            Product catalog
          </h1>
          <FiltersButton onClick={toggleFilter} />
          <FilterByOrder setFilters={setFilters} filters={filters} />
        </div>
        <GamesList
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-[32px] md:gap-y-[60px]"
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
