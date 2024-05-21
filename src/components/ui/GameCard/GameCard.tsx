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
  const { id, href, previewImageURL, price, title, store, label, sale } = props;

  return (
    <Link
      href={`/products/${href}`}
      className="flex md:flex-col gap-[10px] sm:gap-5"
    >
      <div className="relative w-[45%] md:w-full min-h-[150px] md:min-h-[400px] flex md:rounded-xl md:overflow-hidden z-10">
        <GameCardAction
          label={label}
          id={id}
          slug={href}
          name={title}
          previewImageURL={previewImageURL}
          stores={store}
        />
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
