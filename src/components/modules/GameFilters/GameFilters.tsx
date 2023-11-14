"use client";
import {
  FilterByGenres,
  FilterByQuery,
  FilterByTags,
  FilterByMetacritic,
} from "@/src/components/elements";

const GameFilters = () => {
  return (
    <div className="flex flex-col gap-10 max-w-[300px] w-full">
      <FilterByQuery />
      <FilterByMetacritic />
      <FilterByGenres />
      <FilterByTags />
    </div>
  );
};

export default GameFilters;
