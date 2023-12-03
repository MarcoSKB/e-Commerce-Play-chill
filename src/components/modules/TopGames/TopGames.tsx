"use client";

import { getGameAxios } from "@/src/api/getGameAxios";
import { useAxios } from "@/src/hooks/useAxios";

import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";

import { GameCard, GameCardSkeleton } from "@/src/components/elements";
import { Section } from "@/src/components/modules";

const TopGames = () => {
  const [games, error, loading] = useAxios<GamePreviewData>({
    url: "",
    method: "GET",
    axiosInstance: getGameAxios,
    requestConfig: {
      params: {
        page_size: "4",
        stores: "2",
      },
    },
  });

  if (loading) {
    return (
      <Section
        title={
          <div className="flex items-center gap-[8px] mb-5">
            <span className="text-gradient">Top </span>
            <img src="/icons/thunder.svg" alt="Thunder icon" />
          </div>
        }
      >
        <ul className="flex gap-5">
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
    <Section
      title={
        <div className="flex items-center gap-[8px] mb-5">
          <span className="text-gradient">Top </span>
          <img src="/icons/thunder.svg" alt="Thunder icon" />
        </div>
      }
    >
      <ul className="flex gap-5">
        {games &&
          games.results.map((game, idx) => (
            <li key={game.id}>
              <GameCard
                id={game.id}
                href={game.slug}
                previewImageURL={game.background_image}
                price={game.id}
                title={game.name}
                store={game.stores}
                label={
                  <div className="px-3 py-[10px] bg-black rounded-lg">
                    <div className="flex gap-[4px] text-gradient font-extrabold text-base">
                      Top
                      <img src="/icons/thunder.svg" alt="Thunder icon" />
                      {idx + 1}
                    </div>
                  </div>
                }
              />
            </li>
          ))}
      </ul>
    </Section>
  );
};

export default TopGames;
