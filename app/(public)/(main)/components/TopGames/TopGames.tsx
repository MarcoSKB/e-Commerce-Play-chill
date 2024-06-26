"use client";
import { getGameAxios } from "@/src/api/getGameAxios";
import { useAxios } from "@/src/hooks/useAxios";

import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";

import { Section } from "@/src/components/modules";
import { GameCard, GameCardSkeleton } from "@/src/components/ui";

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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md: gap-11 md:gap-5">
          {[...Array(4)].map((_, index) => (
            <li key={index} className="flex w-full max-w-[100%]">
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
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 md:gap-5">
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
                  <div className="px-2 md:px-3 py-1 md:py-[10px] bg-black rounded-lg">
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
