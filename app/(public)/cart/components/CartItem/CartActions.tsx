"use client";
import { useAppDispatch } from "@/src/hooks/reduxHooks";
import {
  decreaseQttyProduct,
  increaseQttyProduct,
  removeProductFromCart,
} from "@/src/libs/redux/slices/productsCartSlice";

interface Props {
  id: number;
  qtty: number;
}

const CartActions: React.FC<Props> = ({ id, qtty }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-end min-h-full">
      <button
        type="button"
        onClick={() => dispatch(removeProductFromCart(id))}
        className="relative w-[16px] h-[16px] mb-9 opacity-30 hover:opacity-100 transition-opacity object-cover"
      >
        <span className="sr-only">Delete product from cart</span>
        <img
          className="absolute w-full h-full"
          src="/icons/cross.svg"
          alt="Cross icon"
        />
      </button>
      <div className="flex items-center gap-4 mb-auto">
        <button
          type="button"
          onClick={() => dispatch(decreaseQttyProduct(id))}
          className="relative w-4 h-4 opacity-30 hover:opacity-100 transition-opacity"
        >
          <div className="absolute top-1/2 w-4 h-[3px] bg-white" />
          <span className="sr-only">Decrease quantity of products</span>
        </button>
        <span className="text-2xl font-medium">{qtty}</span>
        <button
          type="button"
          onClick={() => dispatch(increaseQttyProduct(id))}
          className="relative w-4 h-4 opacity-30 hover:opacity-100 transition-opacity"
        >
          <span className="sr-only">Increase quantity of products</span>
          <div className="absolute top-1/2 w-4 h-[3px] bg-white" />
          <div className="absolute top-1/2 rotate-90 w-4 h-[3px] bg-white" />
        </button>
      </div>
      <button
        type="button"
        onClick={() => {}}
        className="relative w-[26px] h-[21px] mb-9 transition-opacity"
      >
        <span className="sr-only">Add product to favorite</span>
        <img
          className={`absolute w-full h-full object-cover ${
            false ? "opacity-100" : "opacity-30"
          }`}
          src={false ? "/icons/heart-red.svg" : "/icons/heart-white.svg"}
          alt="Heart icon"
        />
      </button>
    </div>
  );
};

export default CartActions;
