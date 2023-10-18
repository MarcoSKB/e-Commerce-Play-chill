"use client";
import { NextPage } from "next";
import Image from "next/image";

import useAxios from "@/src/hooks/useAxios";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GameDataInfo } from "@/src/types/GameDataInfo";
import { GameInfo } from "@/src/components/modules";

interface Props {
  params: {
    slug: string;
  };
}

const Page: NextPage<Props> = ({ params }) => {
  const { response, error, loading } = useAxios<GameDataInfo>({
    url: params.slug,
    method: "GET",
    axiosInstance: getGameAxios,
  });

  if (loading === true) {
    return <div>Loading</div>;
  }

  return (
    <div className="relative min-h-[1200px]">
      {response && (
        <>
          <Image
            src={response.background_image_additional}
            className="absolute w-full h-[923px] object-cover z-[-1] opacity-[0.31] bg-gradient-to-t from-[#06030F] from-[25.56%] to-black to-[93.8%]"
            alt="Background image"
            width={1920}
            height={1080}
          />
          <GameInfo
            id={response.id}
            productImage={response.background_image}
            title={response.name}
            price={response.id}
            genre={response.genres[0].name}
            platform={response.platforms[0].platform.name}
          />
        </>
      )}
    </div>
  );
};
export default Page;
