import Link from "next/link";
import { Store } from "@/src/types/StoreType";

interface Props {
  price: number;
  slug: string;
  title: string;
  stores: Store[];
}

const CartInfo: React.FC<Props> = (props) => {
  const { price, slug, title, stores } = props;

  return (
    <div className="flex flex-col">
      <Link
        href={slug}
        className="text-lg sm:text-[22px] md:text-[28px] font-medium hover:text-blue transition-colors"
      >
        <h3>{title}</h3>
      </Link>
      <div className="flex justify-between mb-4 md:mb-10">
        <span className="text-lg md:text-3xl font-bold">{price + " $"}</span>
      </div>
      <div className="flex gap-2 text-sm sm:text-base md:text-lg">
        <span className="opacity-30">Activation region:</span>
        <span>Europe</span>
      </div>
      <div className="flex gap-2 text-sm sm:text-base md:text-lg">
        <span className="opacity-30">Platform:</span>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-black from-0% via-80% to-100% pointer-events-none z-0" />
          <span className="flex flex-nowrap max-w-[130px] overflow-x-scroll custom-scroll">
            {stores.map((stores, idx) => (
              <span key={idx} className="whitespace-nowrap pr-5">
                {stores.store.name}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
