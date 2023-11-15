"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IconButton } from "@/src/components/elements";
import { Store } from "@/src/types/StoreType";

interface Props {
  id: number;
  href: string;
  previewImageURL: string;
  price: number;
  title: string;
  store: Store[];
  label?: React.ReactNode;
}

const GameCard: React.FC<Props> = (props) => {
  const { href, previewImageURL, price, title, store, label } = props;
  const [isLike, setIsLike] = useState(false);
  const [inCart, setInCart] = useState(false);

  const onClickLikeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLike(!isLike);
  };

  const onClickCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInCart(!inCart);
    console.log("Clicked on cart");
  };

  const hasStorePlatform = (storesData: Store[], storePlatform: string) => {
    const hasSteam = storesData?.find(
      (stores) => stores.store.slug == storePlatform
    );

    return !!hasSteam;
  };

  return (
    <Link href={`/products/${href}`} className="flex flex-col gap-5">
      <div className="relative w-[300px] h-[400px] flex rounded-xl overflow-hidden">
        {label && (
          <div className="absolute top-0 left-0 flex justify-between items-start w-full h-full px-5 py-5 z-10">
            {label}
          </div>
        )}
        <div className="absolute top-1/2 w-full h-[calc(100%+300px)] flex flex-col justify-between items-end p-5 transition-all duration-300 -translate-y-1/2 hover:h-full z-20">
          <IconButton
            className={isLike ? "bg-green" : "bg-white"}
            iconURL={isLike ? "/icons/heart-white.svg" : "/icons/heart-red.svg"}
            iconAlt="Heart icon"
            onClick={onClickLikeHandler}
          />
          <button
            className="flex items-center justify-center w-full px-3 py-5 bg-green rounded-xl transition-all hover:scale-95 active:scale-90 disabled:active:scale-100 disabled:hover:scale-100 disabled:bg-gray-700"
            disabled={inCart}
            type="button"
            onClick={onClickCartHandler}
          >
            To cart
          </button>
        </div>
        <Image
          priority
          className="object-cover object-center"
          src={
            previewImageURL ? previewImageURL : "/images/image-not-found.jpg"
          }
          height={1000}
          width={800}
          alt="Game preview image"
        />
      </div>
      <div className="flex flex-col gap-3 px-5">
        <div className="text-2xl">{price} $</div>
        <div className="text-base">{title}</div>
        <div className="flex gap-5 flex-wrap">
          {hasStorePlatform(store, "steam") && (
            <div className="flex items-center gap-2 text-[#747474] text-sm font-medium">
              <div className="w-[14px] h-[14px] rounded-full bg-[#3D394A]" />
              Steam
            </div>
          )}
          {hasStorePlatform(store, "gog") && (
            <div className="flex items-center gap-2 text-[#747474] text-sm font-medium">
              <div className="w-[14px] h-[14px] rounded-full bg-[#3D394A]" />
              GOG
            </div>
          )}
          {hasStorePlatform(store, "epic-games") && (
            <div className="flex items-center gap-2 text-[#747474] text-sm font-medium">
              <div className="w-[14px] h-[14px] rounded-full bg-[#3D394A]" />
              Epic Games
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
