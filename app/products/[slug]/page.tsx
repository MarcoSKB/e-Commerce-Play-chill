"use client";
import { NextPage } from "next";
import Image from "next/image";

import useAxios from "@/src/hooks/useAxios";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GameDataInfo } from "@/src/types/GameDataInfo";
import { GameInfo } from "@/src/components/modules";
import { Container } from "@/src/components/elements";

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
  // min-h remove
  return (
    <div className="relative min-h-[1200px] py-20">
      {response && (
        <>
          <div className="absolute top-0 left-0 w-full h-[960px] overflow-hidden opacity-[0.31] -z-10 ">
            <Image
              src={response.background_image_additional}
              className="w-full h-full object-cover"
              alt="Background image"
              width={1920}
              height={1080}
            />
            <div className="absolute top-0 left-0 w-full h-full background-gradient "></div>
          </div>
          <Container>
            <GameInfo
              id={response.id}
              productImage={response.background_image}
              title={response.name}
              price={response.id}
              genre={response.genres[0].name}
              platform={response.platforms[0].platform.name}
            />
          </Container>
        </>
      )}
    </div>
  );
};
export default Page;
