import Image from "next/image";
import Link from "next/link";
import { IGameCard } from "@/src/types/IGameCard";

const GameCard: React.FC<IGameCard> = (props) => {
  const { previewImageURL, title, price, href } = props;
  return (
    <Link href={href} className="flex flex-col gap-5">
      <div className="w-[300px] h-[400px] flex rounded-xl overflow-hidden">
        <Image
          priority
          className="object-cover object-[80%]"
          src={previewImageURL}
          height={800}
          width={600}
          alt="Game preview image"
        />
      </div>
      <div className="flex flex-col gap-5 pr-5 pl-5">
        <div className="text-2xl">{price} $</div>
        <div className="text-base">{title}</div>
      </div>
    </Link>
  );
};

export default GameCard;
