"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { getGameAxios } from "@/src/api/getGameAxios";
import useAxios from "@/src/hooks/useAxios";
import { GameScreenshotData } from "@/src/types/GameScreenshotData";
import { SwiperButton } from "@/src/components/elements";

import "swiper/css";

interface Props {
  id: number;
}

const GameScreenshots: React.FC<Props> = ({ id }) => {
  const [screenshotsData, error, loading] = useAxios<GameScreenshotData>({
    axiosInstance: getGameAxios,
    method: "GET",
    url: `/${id}/screenshots`,
  });

  if (screenshotsData) {
    return (
      <div className="relative">
        <Swiper spaceBetween={50} slidesPerView={3.5}>
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

          {screenshotsData?.results.map((item) => {
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
  }
  return (
    <div>
      <div>Loading screenshots</div>
    </div>
  );
};

export default GameScreenshots;
