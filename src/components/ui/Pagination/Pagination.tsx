"use client";
import Skeleton from "react-loading-skeleton";

import { FiltersType } from "@/src/types/FiltersType";
import { arrayRangeNumber } from "@/src/utils/arrayRangeNumber";
import PaginationControl from "./PaginationControl";

interface Props {
  totalCount: number;
  perPageCount: number;
  currentPage: number;
  loading: boolean;
  siblingsCount?: number;
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
}

const Pagination: React.FC<Props> = (props) => {
  const {
    totalCount,
    perPageCount,
    currentPage,
    siblingsCount = 2,
    setFilters,
    filters,
    loading,
  } = props;

  const minPageValue = 1;
  const maxPageValue = Math.ceil(totalCount / perPageCount);

  // Conditions
  const smallPageLength = maxPageValue <= siblingsCount * 2 + 1;
  const isCloseToMin =
    minPageValue <= currentPage &&
    minPageValue + (siblingsCount + 1) >= currentPage;
  const isCloseToMax =
    maxPageValue >= currentPage &&
    maxPageValue - (siblingsCount + 1) <= currentPage;

  const onClickHandler = (value: number | string) => {
    const number = typeof value == "number" ? value : 1;
    setFilters({
      ...filters,
      page: number,
    });
  };

  if (loading) {
    return (
      <div className="max-w-[520px] mx-auto py-6">
        <Skeleton height={42} />
      </div>
    );
  }

  if (totalCount == 0) {
    return null;
  }

  if (smallPageLength) {
    return (
      <PaginationControl
        onClickHandler={onClickHandler}
        currentValue={currentPage}
        paginationData={arrayRangeNumber(minPageValue, maxPageValue)}
      />
    );
  }

  if (isCloseToMin) {
    return (
      <PaginationControl
        onClickHandler={onClickHandler}
        currentValue={currentPage}
        paginationData={[
          ...arrayRangeNumber(1, siblingsCount * 2 + 1),
          "...",
          maxPageValue,
        ]}
      />
    );
  }

  if (isCloseToMax) {
    return (
      <PaginationControl
        onClickHandler={onClickHandler}
        currentValue={currentPage}
        paginationData={[
          minPageValue,
          "...",
          ...arrayRangeNumber(maxPageValue - siblingsCount * 2, maxPageValue),
        ]}
      />
    );
  }

  return (
    <PaginationControl
      onClickHandler={onClickHandler}
      currentValue={currentPage}
      paginationData={[
        minPageValue,
        "...",
        ...arrayRangeNumber(
          currentPage - siblingsCount,
          currentPage + siblingsCount
        ),
        "...",
        maxPageValue,
      ]}
    />
  );
};

export default Pagination;
