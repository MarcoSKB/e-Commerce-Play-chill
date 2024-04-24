import { truncText } from "@/src/utils/truncText";
import { Store } from "@/src/types/StoreType";
import GameCardStore from "./GameCardStore";

interface Props {
  price: number;
  sale?: number;
  title: string;
  store: Store[];
}
type GamePriceProps = Pick<Props, "price" | "sale">;

const GamePrice: React.FC<GamePriceProps> = (props) => {
  const { price, sale } = props;
  if (sale) {
    return (
      <div className="flex items-center gap-[10px] md:gap-5 font-extrabold md:font-normal text-2xl">
        {price} $
        <span className="md:bg-green text-lg text-green md:text-white  font-semibold md:px-[10px] md:py-2 rounded-lg">
          -{sale}%
        </span>
        <span className="hidden md:inline-block text-lg opacity-20">
          {Math.ceil(price + price * (sale / 100))} $
        </span>
      </div>
    );
  }

  return (
    <div className="text-lg sm:text-2xl font-extrabold md:font-normal">
      {price} $
    </div>
  );
};

const GameCardInfo: React.FC<Props> = (props) => {
  const { price, sale, title, store } = props;
  return (
    <div className="relative w-full flex flex-col gap-[10px] md:gap-3 md:px-5 z-0">
      <GamePrice price={price} sale={sale} />
      <div className="text-sm sm:text-base">{truncText(title, 24)}</div>
      <div className="relative w-full z-0">
        <GameCardStore store={store} />
      </div>
    </div>
  );
};

export default GameCardInfo;
