"use client";
import Image from "next/image";
import Link from "next/link";

import { Store } from "@/src/types/StoreType";

import GameCardAction from "./GameCardAction";
import GameCardInfo from "./GameCardInfo";

interface Props {
  id: number;
  href: string;
  previewImageURL: string;
  price: number;
  title: string;
  store: Store[];
  label?: React.ReactNode;
  sale?: number;
}

const GameCard: React.FC<Props> = (props) => {
  const { href, previewImageURL, price, title, store, label, sale } = props;

  return (
    <Link
      href={`/products/${href}`}
      className="flex md:flex-col gap-[10px] sm:gap-5"
    >
      <div className="relative w-full max-w-[100px] sm:max-w-[200px] md:max-w-[300px] min-h-[150px] md:min-h-[400px] flex md:rounded-xl md:overflow-hidden">
        <GameCardAction label={label} />
        <Image
          priority
          src={
            previewImageURL ? previewImageURL : "/images/image-not-found.jpg"
          }
          className="object-cover object-center rounded-lg"
          alt="Game preview image"
          sizes="w-full md:min-h-[400px]"
          fill
        />
      </div>
      <GameCardInfo price={price} title={title} store={store} sale={sale} />
    </Link>
  );
};

export default GameCard;
