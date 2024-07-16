import React, { forwardRef } from "react";
import InputSkeletonLoading from "./InputSkeletonLoading";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  loading?: boolean;
}

export const InputField: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, loading, ...props }, ref) => {
    if (typeof loading == "boolean" && loading) {
      if (label) {
        return (
          <div className="flex flex-col gap-2">
            <span className="text-sm text-white text-opacity-70">{label}</span>
            <InputSkeletonLoading />
          </div>
        );
      }

      return <InputSkeletonLoading />;
    }

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
