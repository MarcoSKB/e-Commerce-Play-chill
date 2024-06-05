"use client";
import Link from "next/link";
import { useAppSelector } from "@/src/hooks/reduxHooks";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

const FavoriteList = () => {
  const favoriteProducts = useAppSelector((state) => state.productsFavorite);

  if (favoriteProducts.length == 0) {
    return (
      <div className="flex flex-col text-center gap-2 p-7 rounded-3xl border-2 border-white border-opacity-10">
        <p className="text-xl">Your favorite list is empty.</p>
        <Link
          className="text-lg text-blue hover:opacity-80 transition-opacity"
          href="/products"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-8">
      {favoriteProducts.map((product) => (
        <FavoriteItem
          key={product.id}
          id={product.id}
          title={product.name}
          slug={product.slug}
          price={product.id}
          backgroundImage={product.background_image}
          stores={product.stores}
          addedAt={product.addedAt}
        />
      ))}
    </ul>
  );
};

export default FavoriteList;
