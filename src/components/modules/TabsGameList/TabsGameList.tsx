"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

import { getGameAxios } from "@/src/api/getGameAxios";
import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";

import { useAxios } from "@/src/hooks/useAxios";
import useMediaQuery from "@/src/hooks/useMediaQuery";
import { GameCard, GameCardSkeleton } from "@/src/components/ui";
import { tabGameGenres } from "./tabGameGenresData";
import TabsGame from "./TabsGame";

const TabsGameList = () => {
  const [selectedGenre, setSelectedGenre] = useState(tabGameGenres[0]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [games, error, loading] = useAxios<GamePreviewData>({
    url: "",
    method: "GET",
    axiosInstance: getGameAxios,
    dependency: [selectedGenre],
    requestConfig: {
      params: {
        page_size: isMobile ? "6" : "12",
        stores: "2",
        genres: selectedGenre.slug,
      },
    },
  });

  if (loading) {
    return (
      <Tab.Group
        as="div"
        onChange={(idx) => {
          setSelectedGenre(tabGameGenres[idx]);
        }}
      >
        <TabsGame tabGameGenres={tabGameGenres} />
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] gap-y-[42px] md:gap-y-[60px] mb-10">
          {[...Array(12)].map((_, index) => (
            <li key={index} className="flex w-full max-w-[300px]">
              <GameCardSkeleton />
            </li>
          ))}
        </ul>
        <Link
          href="/products"
          className="flex justify-center w-full py-6 text-lg text-blue font-semibold rounded-2xl border-solid border-[2px] border-white border-opacity-10 transition-colors hover:text-white"
        >
          Go to the catalog
        </Link>
      </Tab.Group>
    );
  }

  if (error) {
    return (
      <Tab.Group
        as="div"
        onChange={(idx) => {
          setSelectedGenre(tabGameGenres[idx]);
        }}
      >
        <TabsGame tabGameGenres={tabGameGenres} />
        <div className="mb-10">
          <h3>Something went wrong! Please try again.</h3>
          <br />
          <p className="text-rose-700">{error.message}</p>
        </div>
        <Link
          href="/products"
          className="flex justify-center w-full py-6 text-lg text-blue font-semibold rounded-2xl border-solid border-[2px] border-white border-opacity-10 transition-colors hover:text-white"
        >
          Go to the catalog
        </Link>
      </Tab.Group>
    );
  }

  return (
    <Tab.Group
      as="div"
      onChange={(idx) => {
        setSelectedGenre(tabGameGenres[idx]);
      }}
    >
      <TabsGame tabGameGenres={tabGameGenres} />
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[42px] md:gap-y-[60px] max-w-full mb-10">
        {games?.results.map((game) => (
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
      <Link
        href="/products"
        className="flex justify-center w-full py-6 text-lg text-blue font-semibold rounded-2xl border-solid border-[2px] border-white border-opacity-10 transition-colors hover:text-white"
      >
        Go to the catalog
      </Link>
    </Tab.Group>
  );
};

export default TabsGameList;
