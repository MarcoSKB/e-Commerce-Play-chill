"use client";
import { useAppSelector } from "@/src/hooks/reduxHooks";

const CartSumPrice = () => {
  const productsCart = useAppSelector((state) => state.productsCart);
  const totalPrice = productsCart.reduce(
    (acc, product) => acc + product.id * product.qtty,
    0
  );
  return (
    <div className="md:sticky flex flex-col md:text-center gap-6 md:gap-4 lg:gap-6 top-40 md:p-[16px] lg:p-[30px] md:rounded-[30px] md:border-2 md:border-white md:border-opacity-10">
      <h3 className="text-xl font-bold">{productsCart.length} Products</h3>
      <div className="flex justify-between md:justify-center items-center">
        <span className="md:hidden text-2xl font-semibold">Price:</span>
        <span className="text-4xl font-semibold">{totalPrice} $</span>
      </div>
      <button className="w-full py-5 rounded-2xl text-green text-lg font-semibold bg-green bg-opacity-10 hover:scale-95 hover:bg-opacity-100 hover:text-white transition-all">
        Place an order
      </button>
      <span className="relative pl-5 block text-[#534E57] text-base text-start before:content-['✓'] before:text-white before:absolute before:left-0">
        By purchasing this product, I confirm that I have read and agree to the
        <span className="text-blue opacity-100"> terms</span> and
        <span className="text-blue opacity-100"> conditions</span> of the store
      </span>
    </div>
  );
};

export default CartSumPrice;
