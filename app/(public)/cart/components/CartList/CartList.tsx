"use client";

import { useAppSelector } from "@/src/hooks/reduxHooks";
import { CartItem } from "../../components";

const CartList = () => {
  const productsCart = useAppSelector((state) => state.productsCart);
  return (
    <ul className="flex flex-col gap-[30px]">
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
