"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

import { getGameAxios } from "@/src/api/getGameAxios";
import { GamePreviewData } from "@/src/types/GamePreviewDataInfo";

import { useAxios } from "@/src/hooks/useAxios";
import { GameCard, GameCardSkeleton } from "@/src/components/elements";

const tabGameGenres = [
  {
    id: 0,
    slug: "indie",
    name: "Indie",
  },
  {
    id: 1,
    slug: "adventure",
    name: "Adventure",
  },
  {
    id: 2,
    slug: "rpg",
    name: "RPG",
  },
  {
    id: 3,
    slug: "strategy",
    name: "Strategy",
  },
  {
    id: 4,
    slug: "racing",
    name: "Racing",
  },
];

const TabsGameList = () => {
  const [selectedGenre, setSelectedGenre] = useState(tabGameGenres[0]);
  const [games, error, loading] = useAxios<GamePreviewData>({
    url: "",
    method: "GET",
    axiosInstance: getGameAxios,
    dependency: [selectedGenre],
    requestConfig: {
      params: {
        page_size: "12",
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
        <Tab.List className="text-xl font-medium mb-10" defaultValue={1}>
          {tabGameGenres.map((genre) => (
            <Tab
              key={genre.id}
              className="px-4 py-5 ui-selected:border-solid ui-selected:border-b-[2px] ui-selected:border-white"
            >
              {genre.name}
            </Tab>
          ))}
        </Tab.List>
        <ul className="flex flex-wrap gap-[20px] gap-y-[60px] mb-10">
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
        <Tab.List className="text-xl font-medium mb-10" defaultValue={1}>
          {tabGameGenres.map((genre) => (
            <Tab
              key={genre.id}
              className="px-4 py-5 ui-selected:border-solid ui-selected:border-b-[2px] ui-selected:border-white"
            >
              {genre.name}
            </Tab>
          ))}
        </Tab.List>
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
      <Tab.List className="text-xl font-medium mb-10" defaultValue={1}>
        {tabGameGenres.map((genre) => (
          <Tab
            key={genre.id}
            className="px-4 py-5 ui-selected:border-solid ui-selected:border-b-[2px] ui-selected:border-white"
          >
            {genre.name}
          </Tab>
        ))}
      </Tab.List>
      <ul className="flex flex-wrap gap-x-[20px] gap-y-[60px] max-w-full mb-10">
        {games?.results.map((game) => (
          <li key={game.id} className="max-w-[300px] w-full">
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
