"use client";
import {
  FilterByGenres,
  FilterByQuery,
  FilterByTags,
  FilterByMetacritic,
  FilterByPlatforms,
} from "@/src/components/elements";

const GameFilters = () => {
  return (
    <div className="flex flex-col gap-10 max-w-[300px] w-full">
      <FilterByQuery />
      <FilterByMetacritic />
      <FilterByGenres />
      <FilterByTags />
      <FilterByPlatforms />
    </div>
  );
};

export default GameFilters;
