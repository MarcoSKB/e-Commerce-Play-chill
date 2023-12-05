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
    <div className="flex flex-col gap-3 px-5">
      {sale ? (
        <div className="flex items-center gap-5 text-2xl">
          {price} $
          <span className="bg-green text-lg font-semibold px-[10px] py-2 rounded-lg">
            -{sale}%
          </span>
          <span className="text-lg opacity-20">
            {Math.ceil(price + price * (sale / 100))} $
          </span>
        </div>
      ) : (
        <div className="text-2xl">{price} $</div>
      )}

      <div className="text-base">{title}</div>
      <GameCardStore store={store} />
    </div>
  );
};

export default GameCardInfo;
