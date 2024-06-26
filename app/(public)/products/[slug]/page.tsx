"use client";
import { NextPage } from "next";

import useAxios from "@/src/hooks/useAxios";
import { getRequirements } from "@/src/utils/getRequirements";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GameDataInfo } from "@/src/types/GameDataInfo";

import { BgImage, Container } from "@/src/components/elements";
import {
  GameInfo,
  GameScreenshots,
  GameDetails,
  GameRecommended,
  Reviews,
} from "./components/";

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

  if (error) {
    return (
      <div>
        <h3>Something went wrong! Please try again.</h3>
        <br />
        <p className="text-rose-700">{error.message}</p>
      </div>
    );
  }

  return (
    <main className="relative py-8 md:py-20">
      <BgImage imgURL={game?.background_image_additional} />
      <Container>
        <GameInfo
          id={game?.id}
          productImage={game?.background_image}
          title={game?.name}
          price={game?.id}
          genre={game?.genres[0]?.name}
          platform={game?.platforms[0]?.platform.name}
          metacritic={game?.metacritic}
          loading={loading}
        />
        {game && (
          <GameScreenshots className="mb-[30px] md:mb-[50px]" id={game.id} />
        )}
        <GameDetails
          className="mb-[70px]"
          description={game?.description}
          requirements={getRequirements(game?.platforms)}
        />
        {game && (
          <GameRecommended
            genresData={game?.genres}
            currentGame={params.slug}
          />
        )}
        <Reviews gameId={game?.id} />
      </Container>
    </main>
  );
};
export default Page;
