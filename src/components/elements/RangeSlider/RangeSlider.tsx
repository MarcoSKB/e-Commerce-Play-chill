"use client";
import { useEffect, useState } from "react";

type RangeSliderValues = { min: number; max: number };

interface Props {
  min: number;
  max: number;
  value: RangeSliderValues;
  step: number;
  onChange: (val: RangeSliderValues) => void;
}

const RangeSlider: React.FC<Props> = (props) => {
  const { min, max, value, step, onChange } = props;
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);

    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);

    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="relative flex items-center h-5">
      <div className="absolute h-5 w-[100%]">
        <input
          className="input-slider"
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          className="input-slider"
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div className="absolute w-full h-5">
        <div
          className="absolute w-5 h-5 rounded-full bg-green top-1/2 ml-[-10px] -translate-y-1/2 z-[2]"
          style={{ left: `${minPos}%` }}
        />
        <div className="absolute w-full top-1/2 h-[2px] rounded-[3px] -translate-y-1/2">
          <div
            className="absolute h-full bg-white"
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div
          className="absolute w-5 h-5 rounded-full bg-green top-1/2 ml-[-10px] -translate-y-1/2 z-[2]"
          style={{ left: `${maxPos}%` }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
