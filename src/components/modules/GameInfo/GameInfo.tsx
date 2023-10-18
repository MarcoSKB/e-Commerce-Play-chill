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
}

const GameInfo: React.FC<Props> = (props) => {
  const { id, productImage, title, price, genre, platform } = props;
  return (
    <div className="flex gap-x-[60px]">
      <div className="w-[350px] h-[464px] flex rounded-2xl overflow-hidden">
        <Image
          priority
          src={productImage}
          className="object-cover object-center"
          alt={"Preview image game"}
          width={700}
          height={928}
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="text-sm font-normal">In stock</p>
        <span className="">{price} $</span>
        <div className="flex gap-3">
          <Button title="Buy" onClick={() => {}} />
          <Button title="Add to cart" type="outline" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
