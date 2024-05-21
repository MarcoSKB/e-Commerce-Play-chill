"use client";
import Link from "next/link";

import { useAppSelector } from "@/src/hooks/reduxHooks";
import { CartItem } from "../../components";

const CartList = () => {
  const productsCart = useAppSelector((state) => state.productsCart);

  if (productsCart.length === 0) {
    return (
      <div className="flex flex-col text-center gap-2 p-7 rounded-3xl border-2 border-white border-opacity-10">
        <p className="text-xl">Your shopping cart is empty.</p>
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
    <ul className="flex flex-col gap-[15px] sm:gap-[24px] md:gap-[30px]">
      {productsCart.map((product) => (
        <li key={product.id}>
          <CartItem
            id={product.id}
            slug={product.slug}
            previewImageURL={product.background_image}
            price={product.id}
            title={product.name}
            store={product.stores}
            qtty={product.qtty}
          />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
