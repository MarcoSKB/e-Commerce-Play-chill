"use client";
import { useEffect, useState } from "react";

import { useDebounce } from "@/src/hooks/useDebounce";
import { FiltersType } from "@/src/types/FiltersType";

import { RangeSlider } from "@/src/components/elements";

interface Props {
  setFilters: (value: FiltersType) => void;
  filters: FiltersType;
}

const FilterByMetacritic: React.FC<Props> = (props) => {
  const { setFilters, filters } = props;
  const [value, setValue] = useState({ min: 0, max: 100 });
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    setFilters({
      ...filters,
      metacritic: `${debouncedValue.min},${debouncedValue.max}`,
    });
  }, [debouncedValue]);

  const onMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = +e.target.value;

    if (inputValue >= 0 && inputValue <= value.max) {
      setValue({ min: inputValue, max: value.max });
    }

    if (inputValue > value.max) {
      setValue({ min: value.max, max: value.max });
    }

    if (inputValue < 0) {
      setValue({ min: 0, max: value.max });
    }
  };
  const onMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = +e.target.value;

    if (inputValue >= value.min && inputValue <= 100) {
      setValue({ min: value.min, max: inputValue });
    }

    if (inputValue < value.min) {
      setValue({ min: value.min, max: value.min });
    }

    if (inputValue > 100) {
      setValue({ min: value.min, max: 100 });
    }
  };

  return (
    <div className="flex flex-col">
      <span className="text-xl font-bold">Metacritic score</span>
      <div className="flex text-lg">
        <span className="w-1/2 px-5 py-[10px]">From</span>
        <span className="w-1/2 px-5 py-[10px]">To</span>
      </div>
      <div className="flex rounded-[10px] border-solid border-2 border-white border-opacity-10">
        <input
          className="w-1/2 px-5 py-4 text-lg bg-transparent border-r-2 border-white border-opacity-10 remove-arrow-number-input focus:outline-offset-[-1px]"
          type="number"
          max={100}
          value={value.min}
          onChange={(e) => onMinInputChange(e)}
        />
        <input
          className="w-1/2 px-5 py-4 text-lg bg-transparent remove-arrow-number-input focus:outline-offset-[-1px]"
          type="number"
          value={value.max}
          max={100}
          onChange={(e) => onMaxInputChange(e)}
        />
      </div>
      <div className="px-[32px] mt-[-10px]">
        <RangeSlider
          min={0}
          max={100}
          value={value}
          step={0}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default FilterByMetacritic;
