import Link from "next/link";

const BottomBar = () => {
  return (
    <div className="flex justify-between py-6">
      <Link
        target="_blank"
        href="https://rawg.io/"
        className="text-lg text-blue transition-colors hover:text-white focus:outline-none focus:outline-offset-8 focus:outline-white focus:text-white"
      >
        RAWG API service
      </Link>
      <span className="text-lg text-[#63686D]">
        {`Online game store "Playnchill" © 2024`}
      </span>
      <div className="max-w-[144px] w-full" />
    </div>
  );
};

export default BottomBar;
