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
  const swiper = useSwiper();
  const [endSlide, setEndSlide] = useState(false);

  function onSwipeHandler(side: toSide): void {
    if (side === "Next") {
      swiper.slideNext();
    }
    if (side === "Prev") {
      swiper.slidePrev();
    }
  }

  function onSlideChangeHandler(side: toSide) {
    if (side === "Next") {
      setEndSlide(swiper.isEnd);
    }
    if (side === "Prev") {
      setEndSlide(swiper.isBeginning);
    }
  }

  swiper.on("slideChange", () => onSlideChangeHandler(toSide));
  return (
    <button
      disabled={endSlide}
      type="button"
      className={`${className}`}
      onClick={() => onSwipeHandler(toSide)}
    >
      {children}
    </button>
  );
};

export default SwiperButton;
