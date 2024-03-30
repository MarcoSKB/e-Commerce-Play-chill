"use client";
import { useState } from "react";
import { IconButton } from "../";

interface Props {
  label: React.ReactNode;
}

const GameCardAction: React.FC<Props> = (props) => {
  const { label } = props;
  const [isLike, setIsLike] = useState(false);
  const [inCart, setInCart] = useState(false);

  const onClickLikeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLike(!isLike);
  };

  const onClickCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInCart(!inCart);
    console.log("Clicked on cart");
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
          className={isLike ? "bg-green" : "bg-white"}
          iconURL={isLike ? "/icons/heart-white.svg" : "/icons/heart-red.svg"}
          iconAlt="Heart icon"
          onClick={onClickLikeHandler}
        />
        <button
          className="flex items-center justify-center w-10 md:w-full h-10 md:h-auto px-2 md:px-3 py-2 md:py-5 bg-green rounded-lg md:rounded-xl transition-all md:hover:scale-95 md:active:scale-90 disabled:active:scale-100 disabled:hover:scale-100 disabled:bg-gray-700"
          disabled={inCart}
          type="button"
          onClick={onClickCartHandler}
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
