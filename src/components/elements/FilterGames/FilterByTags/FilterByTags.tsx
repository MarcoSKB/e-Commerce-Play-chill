"use client";
import { useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Skeleton from "react-loading-skeleton";

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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<GameTagsResponse["results"]>(
    []
  );

  const debouncedResultValue = useDebounce(selectedTags, 1000)
    .map((value) => value.slug)
    .join(",");
  const [gameTags, error, loading] = useAxios<GameTagsResponse>({
    url: "/tags",
    method: "GET",
    axiosInstance: rawgApiAxios,
  });

  useEffect(() => {
    setFilters({
      ...filters,
      tags: debouncedResultValue,
      page: 1,
    });
  }, [debouncedResultValue]);

  if (loading) {
    return <Skeleton height={26} />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Listbox
      value={selectedTags}
      disabled={loading}
      onChange={setSelectedTags}
      multiple
      as="div"
    >
      <Listbox.Button
        className="flex justify-between items-center w-full py-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold">Tags for games</span>
        <img
          className={`ml-4 rotate-0 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          src="/icons/arrow-small-green.svg"
          alt="Green arrow icon"
        />
      </Listbox.Button>
      {isOpen && (
        <Transition
          appear
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="flex flex-col gap-4 max-h-[210px] mt-4 overflow-y-scroll snap-mandatory snap-y custom-scroll">
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
      )}
    </Listbox>
  );
};

export default FilterByTags;
