import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputField: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => {
    if (label) {
      return (
        <label className="flex flex-col gap-2">
          <span className="text-sm text-white text-opacity-70">{label}</span>
          <input
            ref={ref}
            {...props}
            className="flex w-full h-fit px-3 py-[10px] text-sm rounded-lg bg-[#100D18] outline-none focus-within:outline-green"
          />
        </label>
      );
    }

    return (
      <input
        ref={ref}
        {...props}
        className="flex w-full h-fit px-3 py-[10px] text-sm rounded-lg bg-[#100D18] outline-none focus-within:outline-green"
      />
    );
  }
);
