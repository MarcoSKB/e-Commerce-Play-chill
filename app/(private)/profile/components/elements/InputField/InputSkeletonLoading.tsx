import React from "react";
import Skeleton from "react-loading-skeleton";

export default function InputSkeletonLoading() {
  return (
    <div className="relative w-full z-0">
      <Skeleton borderRadius={8} className="absolute h-[39px]" />
    </div>
  );
}
