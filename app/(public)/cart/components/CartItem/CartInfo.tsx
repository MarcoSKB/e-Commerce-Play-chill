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
        className="text-[28px] font-medium hover:text-blue transition-colors"
      >
        <h3>{title}</h3>
      </Link>
      <div className="flex justify-between mb-10">
        <span className="text-3xl font-bold">{price + " $"}</span>
      </div>
      <div className="flex gap-2 text-lg">
        <span className="opacity-30">Activation region:</span>
        <span>Europe</span>
      </div>
      <div className="flex gap-2 text-lg">
        <span className="opacity-30">Platform:</span>
        <span>{stores.map((stores) => stores.store.name)}</span>
      </div>
    </div>
  );
};

export default CartInfo;
