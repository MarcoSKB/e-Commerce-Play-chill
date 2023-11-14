"use client";
import { useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import useAxios from "@/src/hooks/useAxios";
import { useDebounce } from "@/src/hooks/useDebounce";

import { rawgApiAxios } from "@/src/api/rawgApiAxios";
import { GameTagsResponse } from "@/src/types/GameTagsResponse";
import { FiltersType } from "@/src/types/FiltersType";

interface Props {
  setFilters: (value: FiltersType) => void;
  filters: FiltersType;
}

const FilterByTags: React.FC<Props> = (props) => {
  const { setFilters, filters } = props;
  const [selectedTags, setSelectedTags] = useState<GameTagsResponse["results"]>(
    []
  );
  const debouncedValue = useDebounce(selectedTags, 1000);

  const [gameTags, error, loading] = useAxios<GameTagsResponse>({
    url: "/tags",
    method: "GET",
    axiosInstance: rawgApiAxios,
  });

  useEffect(() => {
    setFilters({
      ...filters,
      tags: debouncedValue.map((value) => value.slug).join(","),
    });
  }, [debouncedValue]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Listbox
      value={selectedTags}
      disabled={loading}
      onChange={setSelectedTags}
      multiple
      as="div"
    >
      <Listbox.Button className="flex justify-between items-center w-full ui-open:mb-4 py-1">
        <span className="text-xl font-semibold">Tags for games</span>
        <img
          className="ml-4 rotate-0 ui-open:rotate-180 transition-transform"
          src="/icons/arrow-small-green.svg"
          alt="Green arrow icon"
        />
      </Listbox.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className="flex flex-col gap-4 max-h-[210px] overflow-y-scroll snap-mandatory snap-y custom-scroll">
          {gameTags?.results.map((tag) => (
            <Listbox.Option
              key={tag.id}
              value={tag}
              className="flex items-center gap-4 snap-center cursor-pointer text-lg opacity-20 transition-opacity hover:opacity-80 ui-selected:opacity-100"
            >
              <div className="w-6 h-6 rounded-[6px] border-solid border-2 border-white transition-colors ui-selected:bg-green ui-selected:border-green"></div>
              {tag.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default FilterByTags;
