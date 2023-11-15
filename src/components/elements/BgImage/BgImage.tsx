import Image from "next/image";
import React from "react";

interface Props {
  imgURL: string;
}

const BgImage: React.FC<Props> = ({ imgURL }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full max-h-[960px] overflow-hidden opacity-[0.31] -z-10">
      <Image
        priority
        src={imgURL ? imgURL : "/images/fullsize-image-not-found.jpg"}
        className="w-full h-full object-cover"
        alt="Background image"
        width={1920}
        height={1080}
      />
      <div className="absolute top-0 left-0 w-full h-full background-gradient"></div>
    </div>
  );
};

export default BgImage;
