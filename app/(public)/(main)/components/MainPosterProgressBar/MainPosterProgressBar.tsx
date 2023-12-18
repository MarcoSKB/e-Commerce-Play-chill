"use client";

import { useSwiperReactive } from "@/src/hooks/useSwiperReactive";

interface Props {
  slidesCount: number;
}

const MainPosterProgressBar: React.FC<Props> = (props) => {
  const { slidesCount } = props;
  const swiper = useSwiperReactive();

  return (
    <div className="flex w-full justify-center gap-x-[10px] py-5">
      {[...Array(slidesCount)].map((_, idx) => (
        <div
          key={idx}
          className="relative w-10 h-[2px] bg-white bg-opacity-10 rounded-sm overflow-hidden"
        >
          <div
            className={
              idx == swiper.realIndex
                ? "animate-fill-progress bg-white h-full"
                : "h-full"
            }
          />
        </div>
      ))}
    </div>
  );
};

export default MainPosterProgressBar;
