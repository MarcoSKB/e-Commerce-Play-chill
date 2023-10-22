"use client";
import { NextPage } from "next";
import useAxios from "@/src/hooks/useAxios";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GameDataInfo } from "@/src/types/GameDataInfo";

import {
  GameInfo,
  GameScreenshots,
  GameDetails,
} from "@/src/components/modules";
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

  function getRequirements(platforms: GameDataInfo["platforms"]) {
    const platformPC = platforms.find(
      (platform) => platform.platform.slug === "pc"
    );
    return platformPC?.requirements;
  }

  if (loading === true) {
    return <div>Loading</div>;
  }

  return (
    <div className="relative py-20">
      {game && (
        <>
          <BgImage imgURL={game.background_image_additional} />
          <Container>
            <div className="mb-20">
              <GameInfo
                id={game.id}
                productImage={game.background_image}
                title={game.name}
                price={game.id}
                genre={game.genres[0].name}
                platform={game.platforms[0].platform.name}
                metacritic={game.metacritic}
              />
            </div>
            <div className="mb-[70px]">
              <GameScreenshots id={game.id} />
            </div>
            <GameDetails
              description={game.description}
              requirements={getRequirements(game.platforms)}
            />
          </Container>
        </>
      )}
    </div>
  );
};
export default Page;
