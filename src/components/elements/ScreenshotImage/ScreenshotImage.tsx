"use client";
import { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

import { Modal } from "@/src/components/ui";

interface Props {
  src: string;
  width: number;
  height: number;
}

const ScreenshotImage: React.FC<Props> = (props) => {
  const { src, width, height } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsFullScreen(true)}
      className="relative flex rounded-2xl w-[300px] h-[169px] overflow-hidden"
    >
      <Image
        src={src}
        width={width}
        height={height}
        quality={10}
        placeholder="empty"
        alt="Screenshots from the game"
        className="absolute w-full h-full object-cover"
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
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
      <Modal isOpen={isFullScreen} setIsOpen={setIsFullScreen}>
        <Image
          src={src}
          width={width}
          height={height}
          quality={50}
          alt="Full size screenshots from the game"
          className="w-full max-h-[80vh] min-h-[300px] object-cover z-50 rounded-3xl cursor-pointer"
          onClick={() => setIsFullScreen(false)}
        />
      </Modal>
    </button>
  );
};

export default ScreenshotImage;
