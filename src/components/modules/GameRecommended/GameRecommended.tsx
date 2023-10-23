"use client";

import { useEffect, useState } from "react";

import { genres } from "@/src/types/GameDataInfo";
import {
  GamePreviewData,
  GamePreviewInfo,
} from "@/src/types/GamePreviewDataInfo";

import { getGameAxios } from "@/src/api/getGameAxios";
import useAxios from "@/src/hooks/useAxios";
import { getValuesFromObjects } from "@/src/utils/getValuesFromObjects";
import { GameCard } from "@/src/components/elements";

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

  return (
    <ul className="flex gap-[20px]">
      {gamesFiltered &&
        gamesFiltered.map((game) => (
          <li key={game.id}>
            <GameCard
              href={game.slug}
              previewImageURL={game.background_image}
              price={game.id}
              title={game.name}
            />
          </li>
        ))}
    </ul>
  );
};

export default GameRecommended;
