"use client";
import Link from "next/link";
import Image from "next/image";

import { Store } from "@/src/types/StoreType";
import CartInfo from "./CartInfo";
import CartActions from "./CartActions";

interface Props {
  id: number;
  slug: string;
  previewImageURL: string;
  price: number;
  title: string;
  store: Store[];
  qtty: number;
}

const CartItem: React.FC<Props> = (props) => {
  const { id, title, slug, previewImageURL, price, store, qtty } = props;

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between w-full pt-4 md:pt-7 border-t border-darkPurple">
      <div className="flex gap-5 lg:gap-8">
        <div className="relative w-[110px] sm:w-[160px] md:w-[140px] lg:w-[200px] h-[160px] sm:h-[200px] lg:h-[240px] rounded-md overflow-hidden">
          <Image
            src={previewImageURL}
            alt="Product image"
            className="object-cover"
            fill
          />
        </div>
        <CartInfo price={price} stores={store} slug={slug} title={title} />
      </div>
      <CartActions id={id} qtty={qtty} />
    </div>
  );
};

export default CartItem;
