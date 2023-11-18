"use client";
import { useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Skeleton from "react-loading-skeleton";

import useAxios from "@/src/hooks/useAxios";
import { useDebounce } from "@/src/hooks/useDebounce";

import { rawgApiAxios } from "@/src/api/rawgApiAxios";
import { GamePlatformsResponse } from "@/src/types/GamePlatformsResponse";
import { FiltersType } from "@/src/types/FiltersType";

interface Props {
  setFilters: (value: FiltersType) => void;
  filters: FiltersType;
}

const FilterByPlatforms: React.FC<Props> = (props) => {
  const { setFilters, filters } = props;
  const [selectedPlatforms, setSelectedPlatforms] = useState<
    GamePlatformsResponse["results"]
  >([]);
  const debouncedValue = useDebounce(selectedPlatforms, 1000);

  const [gamePlatforms, error, loading] = useAxios<GamePlatformsResponse>({
    url: "/platforms",
    method: "GET",
    axiosInstance: rawgApiAxios,
  });

  useEffect(() => {
    setFilters({
      ...filters,
      platforms: debouncedValue.map((value) => value.id).join(","),
    });
  }, [debouncedValue]);

  if (loading) {
    return <Skeleton height={26} count={1} />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Listbox
      value={selectedPlatforms}
      disabled={loading}
      onChange={setSelectedPlatforms}
      multiple
      as="div"
    >
      <Listbox.Button className="flex justify-between items-center w-full py-1 ui-open:mb-4">
        <span className="text-xl font-semibold">Platforms</span>
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
          {gamePlatforms?.results.map((platform) => (
            <Listbox.Option
              key={platform.id}
              value={platform}
              className="flex items-center gap-4 snap-center cursor-pointer text-lg opacity-20 transition-opacity hover:opacity-80 ui-selected:opacity-100"
            >
              <div className="w-6 h-6 rounded-[6px] border-solid border-2 border-white transition-colors ui-selected:bg-green ui-selected:border-green"></div>
              {platform.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default FilterByPlatforms;
