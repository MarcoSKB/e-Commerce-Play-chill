"use client";
import { getGameAxios } from "@/src/api/getGameAxios";
import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";

import useAxios from "@/src/hooks/useAxios";
import { Section } from "@/src/components/modules";
import { GamesList } from "@/src/components/elements";

const DiscountsTitle = () => {
  return (
    <>
      Discounts <span className="text-green">%</span>
    </>
  );
};

const GameDiscounts = () => {
  const [games, error, loading] = useAxios<GamePreviewData>({
    url: "",
    method: "GET",
    axiosInstance: getGameAxios,
    requestConfig: {
      params: {
        page_size: "4",
        genres: "sports",
        metacritic: "80,100",
      },
    },
  });

  return (
    <Section title={<DiscountsTitle />}>
      <GamesList
        className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-11 md:gap-y-16"
        games={games?.results}
        error={error}
        loading={loading}
        sale={15}
      />
    </Section>
  );
};

export default GameDiscounts;
