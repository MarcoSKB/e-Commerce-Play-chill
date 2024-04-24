import React from "react";

interface Props {
  onClickHandler: (value: number | string) => void;
  currentValue: number;
  value: number | string;
}

const PaginationButton: React.FC<Props> = ({
  onClickHandler,
  value,
  currentValue,
}) => {
  return (
    <button
      type="button"
      disabled={value === "..." || value === currentValue}
      onClick={() => onClickHandler(value)}
      className={`flex items-center justify-center min-w-[24px] md:min-w-[32px] min-h-[25px] px-2 text-base md:text-xl rounded-md transition-all ${
        value !== "..."
          ? "border-2 border-solid border-opacity-70 hover:text-green hover:border-green hover:scale-90"
          : "px-2"
      } ${
        value == currentValue
          ? "border-green bg-green text-black hover:text-black hover:border-green hover:scale-100"
          : "border-white"
      }`}
    >
      {value}
    </button>
  );
};

export default PaginationButton;
