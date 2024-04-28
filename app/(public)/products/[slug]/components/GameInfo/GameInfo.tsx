"use client";
import Image from "next/image";

import { Button } from "@/src/components/ui";
import GameInfoSkeleton from "./GameInfoSkeleton";

interface Props {
  id: number | undefined;
  productImage: string | undefined;
  title: string | undefined;
  price: number | undefined;
  genre: string | undefined;
  platform: string | undefined;
  metacritic: number | undefined;
  className?: string;
  loading: boolean;
}

const GameInfo: React.FC<Props> = (props) => {
  const {
    id,
    productImage,
    title,
    price,
    genre,
    platform,
    metacritic,
    loading,
  } = props;

  if (loading) {
    return (
      <div>
        <GameInfoSkeleton className="mb-[42px] md:mb-20" />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col md:flex-row gap-8 md:gap-[60px] mb-[42px] md:mb-20`}
    >
      <div className="md:max-w-[350px] w-full h-[464px] flex rounded-2xl overflow-hidden">
        <Image
          priority
          src={productImage ? productImage : "/images/image-not-found.jpg"}
          className="object-cover"
          alt={"Preview image game"}
          width={1200}
          height={1428}
        />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <h1 className="text-3xl md:text-4xl font-extrabold">{title}</h1>
        <p className="relative pl-[20px] text-sm font-normal before:content-[''] before:block before:absolute before:left-0 before:top-[5px] before:w-3 before:h-3 before:rounded-full before:bg-green">
          In stock
        </p>
        <span className="text-3xl md:text-4xl font-bold mb-[32px] md:mb-[0px]">
          {price} $
        </span>
        <div className="flex order-last md:order-none gap-3 mb-[20px]">
          <Button title="Buy" onClick={() => {}} />
          <Button title="Add to cart" type="outline" onClick={() => {}} />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-[75px] mb-[30px] md:mb-[0px]">
          <div className="flex md:flex-col gap-y-2">
            <span className="text-sm md:text-lg w-1/2 md:w-auto">Genre</span>
            <span className="font-base text-base md:text-xl">
              {genre ? genre : "Is unknown"}
            </span>
          </div>
          <div className="flex md:flex-col gap-y-2">
            <span className="text-sm md:text-lg w-1/2 md:w-auto">Platform</span>
            <span className="font-base text-base md:text-xl">
              {platform ? platform : "Is unknown"}
            </span>
          </div>
          {metacritic && (
            <div className="flex md:flex-col gap-y-2 items-start">
              <span className="text-sm md:text-lg w-1/2 md:w-auto">
                Metascore
              </span>
              <span className="font-base text-base md:text-xl px-2 md:px-3 py-[2px] md:py-1 border-solid border-[1px] rounded-md border-green">
                {metacritic}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
