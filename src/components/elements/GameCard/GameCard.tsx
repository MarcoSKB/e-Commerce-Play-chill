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
      <GameCardInfo price={price} title={title} store={store} sale={sale} />
    </Link>
  );
};

export default GameCard;
