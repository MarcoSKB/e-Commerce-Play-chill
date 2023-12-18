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
        <div className="absolute top-0 left-0 flex justify-between items-start w-full h-full px-5 py-5 z-10">
          {label}
        </div>
      )}
      <div className="absolute top-1/2 w-full h-[calc(100%+300px)] flex flex-col justify-between items-end p-5 transition-all duration-300 -translate-y-1/2 hover:h-full z-20">
        <IconButton
          className={isLike ? "bg-green" : "bg-white"}
          iconURL={isLike ? "/icons/heart-white.svg" : "/icons/heart-red.svg"}
          iconAlt="Heart icon"
          onClick={onClickLikeHandler}
        />
        <button
          className="flex items-center justify-center w-full px-3 py-5 bg-green rounded-xl transition-all hover:scale-95 active:scale-90 disabled:active:scale-100 disabled:hover:scale-100 disabled:bg-gray-700"
          disabled={inCart}
          type="button"
          onClick={onClickCartHandler}
        >
          To cart
        </button>
      </div>
    </>
  );
};

export default GameCardAction;
