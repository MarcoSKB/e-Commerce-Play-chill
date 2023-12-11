import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  slug: string;
  title: string;
  price: number;
  imgURL: string;
}

const SearchItem: React.FC<Props> = (props) => {
  const { id, slug, title, price, imgURL } = props;
  return (
    <Link
      className="relative flex gap-5 p-4 rounded-2xl hover:bg-blue hover:bg-opacity-10 transition-colors focus:outline-none focus-visible:outline-blue focus-visible:outline-offset-8"
      href={`/products/${slug}`}
    >
      <div className="relative max-w-[114px] w-full min-h-[143px] rounded-md overflow-hidden">
        <Image
          quality={10}
          className="object-cover"
          src={imgURL ? imgURL : "/images/image-not-found.jpg"}
          alt="Game preview image"
          fill
          sizes="w-[114px] h-[143px]"
        />
      </div>

      <div className="flex flex-col text-black">
        <h4 className="text-xl font-semibold mb-[10px]">{title}</h4>
        <span className="text-2xl font-bold">{price} $</span>
      </div>
      <div className="absolute right-[30px] z-20 top-[50%] translate-y-[-50%] flex flex-col gap-2">
        <button className="p-3 rounded-full border-solid border-2 border-[#E6E6E7] hover:scale-90 transition-transform focus:outline-none focus-visible:outline-blue focus-visible:outline-offset-1">
          <img
            className="opacity-20"
            src="/icons/cart-black.svg"
            alt="Cart icon"
          />
        </button>
        <button className="p-3 rounded-full border-solid border-2 border-[#E6E6E7] hover:scale-90 transition-transform focus:outline-none focus-visible:outline-blue focus-visible:outline-offset-1">
          <img
            className="opacity-20"
            src="/icons/heart-black.svg"
            alt="Heart icon"
          />
        </button>
      </div>
    </Link>
  );
};

export default SearchItem;
