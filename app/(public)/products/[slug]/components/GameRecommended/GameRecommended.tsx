"use client";
import { useEffect, useState } from "react";

import { getGameAxios } from "@/src/api/getGameAxios";
import useAxios from "@/src/hooks/useAxios";
import { getValuesFromObjects } from "@/src/utils/getValuesFromObjects";

import { genres } from "@/src/types/GameDataInfo";
import {
  GamePreviewData,
  GamePreviewInfo,
} from "@/src/types/GamePreviewDataInfo";

import { Section } from "@/src/components/modules";
import { GameCard, GameCardSkeleton } from "@/src/components/ui";

interface Props {
  genresData: genres[];
  currentGame: string;
}

const GameRecommended: React.FC<Props> = ({ genresData, currentGame }) => {
  const [gamesFiltered, setGamesFiltered] = useState<GamePreviewInfo[] | null>(
    null
  );
  const [games, error, loading] = useAxios<GamePreviewData>({
    url: "",
    method: "GET",
    axiosInstance: getGameAxios,
    requestConfig: {
      params: {
        genres: getValuesFromObjects<genres>(genresData, "slug"),
        page_size: "5",
        stores: "2",
      },
    },
  });

  useEffect(() => {
    if (games) {
      const gameSorted = games.results.filter(
        (game) => game.slug !== currentGame
      );
      setGamesFiltered(gameSorted.slice(0, 4));
    }
  }, [games]);

  if (loading) {
    return (
      <Section title="You will be interested">
        <ul className="flex gap-[20px]">
          {[...Array(4)].map((_, index) => (
            <li key={index} className="flex w-full max-w-[300px]">
              <GameCardSkeleton />
            </li>
          ))}
        </ul>
      </Section>
    );
  }

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
    <Section title="You will be interested">
      <ul className="grid grid-cols-4 gap-[20px]">
        {gamesFiltered?.map((game) => (
          <li key={game.id}>
            <GameCard
              id={game.id}
              href={game.slug}
              previewImageURL={game.background_image}
              price={game.id}
              title={game.name}
              store={game.stores}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default GameRecommended;
