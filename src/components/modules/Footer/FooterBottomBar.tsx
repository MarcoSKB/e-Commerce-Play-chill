import Link from "next/link";

const BottomBar = () => {
  return (
    <div className="flex flex-col justify-between py-6 gap-3">
      <Link
        target="_blank"
        href="https://rawg.io/"
        className="text-lg text-blue transition-colors hover:text-white focus:outline-none focus:outline-offset-8 focus:outline-white focus:text-white"
      >
        RAWG API service
      </Link>
      <span className="text-sm md:text-lg text-[#63686D]">
        {`Online game store "Playnchill" © 2024`}
      </span>
      <div className="max-w-[144px] w-full hidden md:block" />
    </div>
  );
};

export default BottomBar;
