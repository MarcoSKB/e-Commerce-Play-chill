"use client";

import { useAppSelector } from "@/src/hooks/reduxHooks";

interface Props {
  id: number;
  addToCart: () => void;
  removeProductFromCart: () => void;
}

const FavoriteItemAction: React.FC<Props> = (props) => {
  const { id, addToCart, removeProductFromCart } = props;
  const productsCart = useAppSelector((state) => state.productsCart);
  const isProductInCart = !!productsCart.find((product) => product.id === id);

  return (
    <>
      <button
        type="button"
        className={`flex justify-center py-6 w-full max-w-[240px] rounded-2xl text-lg bg-opacity-10 transition-all hover:scale-95 ${
          isProductInCart
            ? "text-green bg-green hover:bg-opacity-30"
            : "text-white text-opacity-50 bg-gray-700"
        }`}
        onClick={() => addToCart()}
      >
        To cart
      </button>
      <button
        type="button"
        className="absolute right-0 bottom-0 w-[20px] h-[20px] opacity-25 hover:opacity-100 transition-opacity"
        onClick={() => removeProductFromCart()}
      >
        <img src="/icons/cross.svg" alt="Cross icon" />
        <span className="sr-only">Delete product from favorite list</span>
      </button>
    </>
  );
};

export default FavoriteItemAction;
