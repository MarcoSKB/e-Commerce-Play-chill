"use client";
import Image from "next/image";
import { Button } from "@/src/components/elements";

interface Props {
  id: number;
  productImage: string;
  title: string;
  price: number;
  genre: string;
  platform: string;
  metacritic: number;
  className?: string;
}

const GameInfo: React.FC<Props> = (props) => {
  const {
    id,
    productImage,
    title,
    price,
    genre,
    platform,
    metacritic,
    className,
  } = props;
  return (
    <div className={`flex gap-x-[60px] ${className}`}>
      <div className="w-[350px] h-[464px] flex rounded-2xl overflow-hidden">
        <Image
          priority
          src={productImage}
          className="object-cover"
          alt={"Preview image game"}
          width={1200}
          height={1428}
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="relative pl-[20px] text-sm font-normal before:content-[''] before:block before:absolute before:left-0 before:top-[5px] before:w-3 before:h-3 before:rounded-full before:bg-green">
          In stock
        </p>
        <span className="text-4xl font-bold">{price} $</span>
        <div className="flex gap-3 mb-[20px]">
          <Button title="Buy" onClick={() => {}} />
          <Button title="Add to cart" type="outline" onClick={() => {}} />
        </div>
        <div className="flex gap-x-[75px]">
          <div className="flex flex-col gap-y-2">
            <span className="text-lg">Genre</span>
            <span className="font-semibold text-xl">{genre}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-lg">Platform</span>
            <span className="font-semibold text-xl">{platform}</span>
          </div>
          <div className="flex flex-col gap-y-2 items-start">
            <span className="text-lg">Metascore</span>
            <span className="font-semibold text-xl px-3 py-1 border-solid border-[1px] rounded-md border-green">
              {metacritic}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
