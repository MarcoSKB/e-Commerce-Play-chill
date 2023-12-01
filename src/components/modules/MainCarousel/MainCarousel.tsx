"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";

import { mainPostersData } from "@/src/data/mainPostersData";
import { MainPoster, MainPosterProgressBar } from "@/src/components/modules";
import { SwiperButton } from "@/src/components/elements";

const a11yConfig = {
  enabled: true,
  prevSlideMessage: "Previous poster",
  nextSlideMessage: "Next poster",
};

const MainCarousel = () => {
  return (
    <Swiper
      a11y={a11yConfig}
      className="relative mt-10 z-20"
      slidesPerView={"auto"}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      // onAutoplayTimeLeft={(swiper, timeLeft, percentage) =>
      //   console.log(Math.floor(percentage * 100))
      // }
      modules={[Autoplay, A11y]}
    >
      <div className="flex justify-between max-w-[1310px] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[9999]">
        <SwiperButton
          toSide="Prev"
          className="flex items-center justify-center w-[50px] h-[50px] text-2xl text-white font-semibold rounded-full overflow-hidden backdrop-blur-md bg-white bg-opacity-10 transition-transform hover:scale-90"
        >
          {"<"}
        </SwiperButton>
        <SwiperButton
          toSide="Next"
          className="flex items-center justify-center w-[50px] h-[50px] text-2xl text-white font-semibold rounded-full overflow-hidden backdrop-blur-md bg-white bg-opacity-10 transition-transform hover:scale-90"
        >
          {">"}
        </SwiperButton>
      </div>

      {mainPostersData.map((posterData) => {
        return (
          <SwiperSlide
            key={posterData.id}
            className="flex items-center justify-center max-w-[1260px] w-full"
          >
            {({ isActive }) => (
              <MainPoster isActive={isActive} data={posterData} />
            )}
          </SwiperSlide>
        );
      })}
      <MainPosterProgressBar slidesCount={mainPostersData.length} />
    </Swiper>
  );
};

export default MainCarousel;
