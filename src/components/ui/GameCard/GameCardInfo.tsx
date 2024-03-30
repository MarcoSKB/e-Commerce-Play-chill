import { truncText } from "@/src/utils/truncText";
import { Store } from "@/src/types/StoreType";
import GameCardStore from "./GameCardStore";

interface Props {
  price: number;
  sale?: number;
  title: string;
  store: Store[];
}

const GameCardInfo: React.FC<Props> = (props) => {
  const { price, sale, title, store } = props;
  return (
    <div className="relative w-full md:max-w-[300px] flex flex-col gap-[10px] md:gap-3 mr-[-24px] md:mr-[0px] md:px-5 z-0">
      {sale ? (
        <div className="flex items-center gap-5 font-extrabold md:font-normal text-2xl">
          {price} $
          <span className="bg-green text-lg font-semibold px-[10px] py-2 rounded-lg">
            -{sale}%
          </span>
          <span className="text-lg opacity-20">
            {Math.ceil(price + price * (sale / 100))} $
          </span>
        </div>
      ) : (
        <div className="text-lg sm:text-2xl font-extrabold md:font-normal">
          {price} $
        </div>
      )}
      <div className="text-sm sm:text-base">{truncText(title, 24)}</div>
      <div className="relative w-full z-0">
        <GameCardStore store={store} />
      </div>
    </div>
  );
};

export default GameCardInfo;
