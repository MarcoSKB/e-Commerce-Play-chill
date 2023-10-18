import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  previewImageURL: string;
  price: number;
  title: string;
}

const GameCard: React.FC<Props> = (props) => {
  const { href, previewImageURL, price, title } = props;
  return (
    <Link href={href} className="flex flex-col gap-5">
      <div className="w-[300px] h-[400px] flex rounded-xl overflow-hidden">
        <Image
          priority
          className="object-cover object-center"
          src={previewImageURL}
          height={1000}
          width={800}
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
