"use client";
import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Skeleton from "react-loading-skeleton";

import { MainPosterType } from "@/src/types/MainPosterType";
import { Button } from "@/src/components/elements";

interface Props {
  isActive: boolean;
  data: MainPosterType;
}

const MainPoster: React.FC<Props> = (props) => {
  const { isActive, data } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative max-w-[1260px] w-full min-h-[700px] rounded-[20px] overflow-hidden transition-transform ${
        isActive ? "scale-100" : "scale-[97%]"
      }`}
    >
      <Transition
        show={isActive}
        as="div"
        className="absolute flex flex-col justify-center py-3 px-[120px] h-full z-10"
        enter="transition-all ease-in-out duration-700 transform"
        enterFrom="translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-all ease-in-out duration-700 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-full opacity-0"
      >
        <img
          className="max-w-[300px] max-h-[156px] h-full w-full mb-5 aspect-[3.7/1] object-contain object-left"
          src={data.logoUrl}
          alt="Game logotype"
        />
        <span className="max-w-[600px] text-xl text-white mb-7">
          {data.description}
        </span>
        <div className="flex items-end gap-[18px] mb-7">
          <span className="text-3xl font-extrabold">{data.price} $</span>
          <span className="text-xl text-green font-extrabold">
            -{data.discount}%
          </span>
          <span className="text-xl text-white text-opacity-30 font-semibold">
            {Math.ceil(data.price * (1 + data.discount / 100))} $
          </span>
        </div>
        <div className="flex gap-[10px]">
          <Button title="To cart" onClick={() => {}} />
          <Button title="To favorites" type="outline" onClick={() => {}} />
        </div>
      </Transition>
      <Image
        quality={50}
        width={1260}
        height={700}
        placeholder="empty"
        className="absolute w-full h-full object-cover"
        src={data.bgImageUrl}
        alt="Poster image"
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <Skeleton
          height={700}
          width={1260}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
};

export default MainPoster;
