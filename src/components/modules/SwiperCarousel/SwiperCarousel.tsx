"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButton } from "@/src/components/elements";

import "swiper/css";

interface Props {
  data: {
    id: number;
    width: number;
    height: number;
    image: string;
  }[];
}

const SwiperCarousel: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={3.5}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperButton
          toSide="Prev"
          className="flex items-center justify-center w-[40px] h-[40px] rounded-full overflow-hidden bg-white absolute left-[20px] top-[41%] z-[9999] opacity-50 transition-opacity hover:opacity-100 disabled:opacity-50"
        >
          <img src="/icons/arrow.svg" alt="Arrow button to slide left" />
        </SwiperButton>
        <SwiperButton
          toSide="Next"
          className="flex items-center justify-center w-[40px] h-[40px] rounded-full overflow-hidden bg-white absolute right-[20px] top-[41%] z-[9999] opacity-50 transition-opacity hover:opacity-100 disabled:opacity-50"
        >
          <img
            className="rotate-180"
            src="/icons/arrow.svg"
            alt="Arrow button to slide right"
          />
        </SwiperButton>

        {data.map((item) => {
          const { image, width, height, id } = item;
          return (
            <SwiperSlide key={id} className="rounded-2xl overflow-hidden">
              <Image
                src={image}
                width={width}
                height={height}
                alt="Screenshots from the game"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
