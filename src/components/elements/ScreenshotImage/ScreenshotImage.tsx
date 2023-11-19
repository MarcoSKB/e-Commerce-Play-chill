"use client";
import { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

interface Props {
  src: string;
  width: number;
  height: number;
}

const ScreenshotImage: React.FC<Props> = (props) => {
  const { src, width, height } = props;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative flex rounded-2xl overflow-hidden w-[300px] h-[169px]">
      <Image
        quality={10}
        src={src}
        width={width}
        height={height}
        alt="Screenshots from the game"
        placeholder="empty"
        className="absolute w-full h-full object-cover"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <Skeleton
          height={height}
          width={width}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}
    </div>
  );
};

export default ScreenshotImage;
