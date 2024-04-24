"use client";
import { FiltersType } from "@/src/types/FiltersType";

import {
  FilterByGenres,
  FilterByQuery,
  FilterByTags,
  FilterByMetacritic,
  FilterByPlatforms,
} from "@/src/components/elements";
import FiltersButton from "../FiltersButton/FiltersButton";

interface Props {
  setFilters: (value: FiltersType) => void;
  toggleFilter: () => void;
  filters: FiltersType;
  isOpen: boolean;
}

const GameFilters: React.FC<Props> = (props) => {
  const { setFilters, filters, isOpen, toggleFilter } = props;

  return (
    <div
      className={`absolute md:static top-0 pt-[80px] md:pt-0 h-screen w-full md:max-w-[220px] lg:max-w-[25%] md:h-auto overflow-y-scroll md:overflow-y-auto z-10 bg-black transition-all duration-500 ${
        isOpen ? "left-0" : "left-[-200%]"
      }`}
    >
      <div className="flex flex-col gap-10 px-4 w-full ">
        <FiltersButton onClick={toggleFilter} />
        <FilterByQuery setFilters={setFilters} filters={filters} />
        <FilterByMetacritic setFilters={setFilters} filters={filters} />
        <FilterByGenres setFilters={setFilters} filters={filters} />
        <FilterByTags setFilters={setFilters} filters={filters} />
        <FilterByPlatforms setFilters={setFilters} filters={filters} />
      </div>
    </div>
  );
};

export default GameFilters;
