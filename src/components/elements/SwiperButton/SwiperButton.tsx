"use client";
import React, { useState } from "react";
import { useSwiper } from "swiper/react";

type toSide = "Next" | "Prev";

interface Props {
  className?: string;
  children: React.ReactNode;
  toSide: toSide;
}

const SwiperButton: React.FC<Props> = (props) => {
  const { children, className, toSide } = props;
  const { slideNext, slidePrev, isBeginning, isEnd } = useSwiper();
  //   const [endSlide, setEndSlide] = useState(false);

  function onSwipeHandler(side: toSide): void {
    if (side === "Next") {
      slideNext();
      // setEndSlide(isEnd);
    }
    if (side === "Prev") {
      slidePrev();
      // setEndSlide(isBeginning);
    }
  }

  return (
    <button
      disabled={isEnd}
      type="button"
      className={`${className}`}
      onClick={() => onSwipeHandler(toSide)}
    >
      {children}
    </button>
  );
};

export default SwiperButton;
