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
      className="relative flex gap-5 px-4 py-2 md:p-4 rounded-2xl hover:bg-blue hover:bg-opacity-10 transition-colors focus:outline-none focus-visible:outline-blue focus-visible:outline-offset-8"
      href={`/products/${slug}`}
    >
      <div className="relative max-w-[90px] md:max-w-[114px] w-full min-h-[120px] md:min-h-[143px] rounded-md overflow-hidden">
        <Image
          quality={10}
          className="object-cover"
          src={imgURL ? imgURL : "/images/image-not-found.jpg"}
          alt="Game preview image"
          sizes="w-[114px] h-[143px]"
          fill
        />
      </div>

      <div className="flex flex-col text-black w-full">
        <h4 className="text-lg md:text-xl max-w-[70%] font-semibold mb-[10px] opacity-80 md:opacity-100">
          {title}
        </h4>
        <span className="text-xl md:text-2xl max-w-[70%] font-bold">
          {price} $
        </span>
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
