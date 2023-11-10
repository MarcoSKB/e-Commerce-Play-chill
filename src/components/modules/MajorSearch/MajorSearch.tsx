"use client";
import { useState } from "react";

import useAxios from "@/src/hooks/useAxios";
import { useDebounce } from "@/src/hooks/useDebounce";

import { getGameAxios } from "@/src/api/getGameAxios";
import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";
import { SearchForm, SearchResultList } from "@/src/components/elements";

const MajorSearch = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebounce(inputValue, 1000);

  const [games, error, loading] = useAxios<GamePreviewData>({
    url: "",
    method: "GET",
    axiosInstance: getGameAxios,
    dependency: [debouncedValue],
    requestConfig: {
      params: {
        page_size: 3,
        search: debouncedValue,
      },
    },
  });

  return (
    <div
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      className={`h-16 input-transition ${
        isActive
          ? "absolute w-[100%] translate-x-[-50%] left-[50%]"
          : "relative w-[648px]"
      }`}
    >
      <SearchForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        isActive={isActive}
      />
      {games && (
        <SearchResultList
          isActive={isActive}
          setIsActive={setIsActive}
          gamesData={games.results}
          gamesCount={games.count}
        />
      )}
    </div>
  );
};

export default MajorSearch;
