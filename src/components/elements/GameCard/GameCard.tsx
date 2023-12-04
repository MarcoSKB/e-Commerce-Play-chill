"use client";
import { MouseEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Store } from "@/src/types/StoreType";
import GameCardStore from "./GameCardStore";
import GameCardAction from "./GameCardAction";

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

  return (
    <Link href={`/products/${href}`} className="flex flex-col gap-5">
      <div className="relative w-full h-[400px] flex rounded-xl overflow-hidden">
        <GameCardAction label={label} />
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
        <GameCardStore store={store} />
      </div>
    </Link>
  );
};

export default GameCard;
