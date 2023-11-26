"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "@/src/hooks/useDebounce";
import { FiltersType } from "@/src/types/FiltersType";

interface Props {
  setFilters: (value: FiltersType) => void;
  filters: FiltersType;
}

const FilterByQuery: React.FC<Props> = (props) => {
  const { setFilters, filters } = props;
  const [queryValue, setQueryValue] = useState("");

  const debouncedValue = useDebounce(queryValue, 1000);

  useEffect(() => {
    setFilters({ ...filters, search: debouncedValue, page: 1 });
  }, [debouncedValue]);

  return (
    <input
      value={queryValue}
      onChange={(e) => setQueryValue(e.target.value)}
      className="rounded-[10px] px-5 py-4 text-lg font-medium bg-transparent border-solid border-2 border-white border-opacity-10"
      placeholder="I'm looking for.."
    />
  );
};

export default FilterByQuery;
