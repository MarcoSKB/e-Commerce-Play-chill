"use client";
import { NextPage } from "next";
import useAxios from "@/src/hooks/useAxios";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GameDataInfo } from "@/src/types/GameDataInfo";

import { GameDetails, GameInfo } from "@/src/components/modules";
import { BgImage, Container } from "@/src/components/elements";

interface Props {
  params: {
    slug: string;
  };
}

const Page: NextPage<Props> = ({ params }) => {
  const [game, error, loading] = useAxios<GameDataInfo>({
    url: params.slug,
    method: "GET",
    axiosInstance: getGameAxios,
  });

  if (loading === true) {
    return <div>Loading</div>;
  }

  // min-h remove
  return (
    <div className="relative py-20">
      {game && (
        <>
          <BgImage imgURL={game.background_image_additional} />
          <Container>
            <GameInfo
              id={game.id}
              productImage={game.background_image}
              title={game.name}
              price={game.id}
              genre={game.genres[0].name}
              platform={game.platforms[0].platform.name}
              metacritic={game.metacritic}
            />
            <GameDetails />
          </Container>
        </>
      )}
    </div>
  );
};
export default Page;
