import Image from "next/image";
import React from "react";

interface Props {
  imgURL: string | undefined;
}

const BgImage: React.FC<Props> = ({ imgURL }) => {
  if (!imgURL) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full max-h-[960px] overflow-hidden opacity-[0.31] -z-10">
      <Image
        priority
        src={imgURL}
        className="w-full h-full object-cover"
        alt="Background image"
        fill
        sizes="w-[1920px] h-[1080px]"
      />
      <div className="absolute top-0 left-0 w-full h-full background-gradient"></div>
    </div>
  );
};

export default BgImage;
