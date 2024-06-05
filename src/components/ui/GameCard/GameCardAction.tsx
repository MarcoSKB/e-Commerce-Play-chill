"use client";
import { useAppDispatch, useAppSelector } from "@/src/hooks/reduxHooks";
import getDateNow from "@/src/utils/getDateNow";
import {
  addProductToCart,
  removeProductFromCart,
} from "@/src/libs/redux/slices/productsCartSlice";
import {
  addProductToFavorite,
  removeProductFromFavorite,
} from "@/src/libs/redux/slices/productsFavoriteSlice";
import { Store } from "@/src/types/StoreType";

import { IconButton } from "../";

interface Props {
  id: number;
  slug: string;
  name: string;
  previewImageURL: string;
  stores: Store[];
  label: React.ReactNode;
}

const GameCardAction: React.FC<Props> = (props) => {
  const { id, slug, name, previewImageURL, stores, label } = props;
  const dispatch = useAppDispatch();
  const isProductInCart = useAppSelector((state) =>
    state.productsCart.find((product) => product.id === id)
  );
  const isProductFavorite = useAppSelector((state) =>
    state.productsFavorite.find((product) => product.id === id)
  );

  const onClickLikeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isProductFavorite) {
      dispatch(removeProductFromFavorite(id));
    } else {
      const payload = {
        id,
        slug,
        name,
        stores,
        background_image: previewImageURL,
        addedAt: getDateNow(),
      };

      dispatch(addProductToFavorite(payload));
    }
  };

  const onClickCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isProductInCart) {
      dispatch(removeProductFromCart(id));
    } else {
      const payload = {
        id,
        slug,
        name,
        stores,
        background_image: previewImageURL,
      };

      dispatch(addProductToCart(payload));
    }
  };

  return (
    <>
      {label && (
        <div className="absolute top-0 left-0 flex justify-center md:justify-between items-end md:items-start w-full h-full md:px-5 py-2 md:py-5 z-10">
          {label}
        </div>
      )}
      <div className="absolute top-full md:top-1/2 left-[calc(100%+11px)] sm:left-[calc(100%+20px)] md:left-0 w-full md:h-[calc(100%+300px)] flex md:flex-col md:justify-between items-end gap-4 md:gap-0 md:p-5 transition-all duration-300 -translate-y-full md:-translate-y-1/2 hover:h-full z-20">
        <IconButton
          onClick={(e) => onClickLikeHandler(e)}
          iconAlt="Heart icon"
          iconURL={
            isProductFavorite
              ? "/icons/heart-white.svg"
              : "/icons/heart-red.svg"
          }
          className={isProductFavorite ? "bg-green" : "bg-white"}
        />
        <button
          type="button"
          onClick={(e) => onClickCartHandler(e)}
          className={`flex items-center justify-center w-10 md:w-full h-10 md:h-auto px-2 md:px-3 py-2 md:py-5 rounded-lg md:rounded-xl transition-all md:hover:scale-95 md:scale-90 ${
            isProductInCart ? "bg-gray-700" : "bg-green"
          }`}
        >
          <span className="hidden md:inline">To cart</span>
          <span className="sr-only md:hidden">Cart button</span>
          <img
            className="md:hidden"
            src="/icons/cart-black.svg"
            alt="Cart icon"
          />
        </button>
      </div>
    </>
  );
};

export default GameCardAction;
