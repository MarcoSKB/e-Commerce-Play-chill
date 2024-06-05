"use client";
import Link from "next/link";
import { Store } from "@/src/types/StoreType";

interface Props {
  slug: string;
  title: string;
  stores: Store[];
}

const FavoriteItemInfo: React.FC<Props> = (props) => {
  const { slug, title, stores } = props;

  return (
    <span className="flex flex-col gap-2">
      <Link href={`/products/${slug}`}>
        <h2 className="text-3xl hover:text-blue transition-colors">{title}</h2>
      </Link>
      <div className="flex gap-2 text-sm sm:text-base md:text-lg">
        <span className="opacity-30">Platform:</span>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-black from-0% via-80% to-100% pointer-events-none z-0" />
          <span className="flex flex-nowrap max-w-[130px] overflow-x-scroll custom-scroll">
            {stores.map((stores, idx) => (
              <span key={idx} className="whitespace-nowrap pr-5">
                {stores.store.name}
              </span>
            ))}
          </span>
        </div>
      </div>
    </span>
  );
};

export default FavoriteItemInfo;
