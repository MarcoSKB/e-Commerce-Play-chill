"use client";
import { useAppDispatch } from "@/src/hooks/reduxHooks";
import useMediaQuery from "@/src/hooks/useMediaQuery";
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
  const isMobile = useMediaQuery("(max-width: 600px)");
  // TODO: Add favorite function
  return (
    <div className="flex flex-row md:flex-col px-4 md:px-0 items-center md:items-end min-h-full">
      <button
        type="button"
        onClick={() => dispatch(removeProductFromCart(id))}
        className="relative order-2 md:order-none w-[25px] h-[25px] md:w-[16px] md:h-[16px] mr-auto md:mr-0 md:mb-9 opacity-30 hover:opacity-100 transition-opacity object-cover"
      >
        <span className="sr-only">Delete product from cart</span>
        <img
          className="absolute top-0 left-0 w-full h-full"
          src={isMobile ? "/icons/trash.svg" : "/icons/cross.svg"}
          alt="Cross icon"
        />
      </button>
      <div className="flex order-3 md:order-none items-center gap-4 mb-auto">
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
        className="relative order-1 md:order-none w-[31px] h-[24px] md:w-[26px] md:h-[21px] mr-8 md:mr-0 md:mb-9 transition-opacity"
      >
        <span className="sr-only">Add product to favorite</span>
        <img
          className={`absolute top-0 left-0 w-full h-full object-cover ${
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
