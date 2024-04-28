"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import Skeleton from "react-loading-skeleton";

import useAxios from "@/src/hooks/useAxios";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GameScreenshotData } from "@/src/types/GameScreenshotData";

import { ScreenshotImage } from "@/src/components/elements";
import { SwiperButton } from "@/src/components/ui";

const a11yConfig = {
  enabled: true,
  prevSlideMessage: "Previous game screenshot",
  nextSlideMessage: "Next game screenshot",
  firstSlideMessage: "First game screenshot",
  lastSlideMessage: "Last game screenshot",
};

interface Props {
  id: number;
  className?: string;
}

const GameScreenshots: React.FC<Props> = ({ id, className }) => {
  const [screenshotsData, error, loading] = useAxios<GameScreenshotData>({
    axiosInstance: getGameAxios,
    method: "GET",
    url: `/${id}/screenshots`,
  });

  if (loading) {
    return (
      <div
        className={`flex flex-nowrap gap-[70px] max-w-full overflow-hidden ${className}`}
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex min-w-fit rounded-2xl overflow-hidden"
          >
            <Skeleton width={300} height={169} />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3>Something went wrong! Please try again.</h3>
        <br />
        <p className="text-rose-700">{error.message}</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className} z-10`}>
      <Swiper
        a11y={a11yConfig}
        breakpoints={{
          320: {
            spaceBetween: 10,
            slidesPerView: 2.2,
          },
          425: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 50,
            slidesPerView: 3.4,
          },
        }}
        modules={[A11y]}
      >
        <SwiperButton
          toSide="Prev"
          className="flex items-center justify-center w-[40px] h-[40px] rounded-full overflow-hidden bg-white absolute left-[5px] md:left-[20px] top-[30%] md:top-[41%] z-[9999] opacity-50 transition-opacity hover:opacity-100 disabled:opacity-50"
        >
          <img src="/icons/arrow.svg" alt="Arrow button to slide left" />
        </SwiperButton>
        <SwiperButton
          toSide="Next"
          className="flex items-center justify-center w-[40px] h-[40px] rounded-full overflow-hidden bg-white absolute right-[5px] md:right-[20px] top-[30%] md:top-[41%] z-[9999] opacity-50 transition-opacity hover:opacity-100 disabled:opacity-50"
        >
          <img
            className="rotate-180"
            src="/icons/arrow.svg"
            alt="Arrow button to slide right"
          />
        </SwiperButton>

        {screenshotsData?.results.map((screenshot) => {
          const { image, width, height, id } = screenshot;

          return (
            <SwiperSlide key={id}>
              <ScreenshotImage src={image} width={width} height={height} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GameScreenshots;
