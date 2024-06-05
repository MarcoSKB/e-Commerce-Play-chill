"use client";

import { useAppSelector } from "@/src/hooks/reduxHooks";

interface Props {
  id: number;
  onClickCartHandler: () => void;
  removeProductHandler: () => void;
}

const FavoriteItemAction: React.FC<Props> = (props) => {
  const { id, onClickCartHandler, removeProductHandler } = props;
  const productsCart = useAppSelector((state) => state.productsCart);
  const isProductInCart = !!productsCart.find((product) => product.id === id);

  return (
    <>
      <button
        type="button"
        className={`flex justify-center py-6 w-full max-w-[240px] rounded-2xl text-lg bg-opacity-10 transition-all active:scale-90 hover:scale-95 ${
          isProductInCart
            ? "text-white text-opacity-50 bg-gray-700"
            : "text-green bg-green hover:bg-opacity-30"
        }`}
        onClick={() => onClickCartHandler()}
      >
        To cart
      </button>
      <button
        type="button"
        className="absolute right-0 bottom-0 w-[20px] h-[20px] opacity-25 hover:opacity-100 transition-opacity"
        onClick={() => removeProductHandler()}
      >
        <img src="/icons/cross.svg" alt="Cross icon" />
        <span className="sr-only">Delete product from favorite list</span>
      </button>
    </>
  );
};

export default FavoriteItemAction;
