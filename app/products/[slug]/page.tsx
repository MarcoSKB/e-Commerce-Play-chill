"use client";
import { NextPage } from "next";
import useAxios from "@/src/hooks/useAxios";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GameDataInfo } from "@/src/types/GameDataInfo";
import { getRequirements } from "@/src/utils/getRequirements";

import {
  GameInfo,
  GameScreenshots,
  GameDetails,
  Section,
  GameRecommended,
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

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }

  return (
    <main className="relative py-20">
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
              className="mb-20"
            />
            <GameScreenshots className="mb-[50px]" id={game.id} />
            <GameDetails
              className="mb-[70px]"
              description={game.description}
              requirements={getRequirements(game.platforms)}
            />
            <Section title="You will be interested">
              <GameRecommended
                genresData={game.genres}
                currentGame={params.slug}
              />
            </Section>
          </Container>
        </>
      )}
    </main>
  );
};
export default Page;
