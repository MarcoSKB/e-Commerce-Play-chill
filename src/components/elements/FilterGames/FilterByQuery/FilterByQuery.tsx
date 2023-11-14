"use client";

import { useState } from "react";

const FilterByQuery = () => {
  const [queryValue, setQueryValue] = useState("");

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
