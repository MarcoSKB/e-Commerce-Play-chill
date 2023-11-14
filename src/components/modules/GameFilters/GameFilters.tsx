"use client";
import { FiltersType } from "@/src/types/FiltersType";

import {
  FilterByGenres,
  FilterByQuery,
  FilterByTags,
  FilterByMetacritic,
  FilterByPlatforms,
} from "@/src/components/elements";

interface Props {
  setFilters: (value: FiltersType) => void;
  filters: FiltersType;
}

const GameFilters: React.FC<Props> = (props) => {
  const { setFilters, filters } = props;
  return (
    <div className="flex flex-col gap-10 max-w-[300px] w-full">
      <FilterByQuery setFilters={setFilters} filters={filters} />
      <FilterByMetacritic setFilters={setFilters} filters={filters} />
      <FilterByGenres setFilters={setFilters} filters={filters} />
      <FilterByTags setFilters={setFilters} filters={filters} />
      <FilterByPlatforms setFilters={setFilters} filters={filters} />
    </div>
  );
};

export default GameFilters;
