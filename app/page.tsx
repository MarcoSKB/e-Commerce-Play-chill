"use client";

import { GameCard } from "@/components/elements";
import { useEffect } from "react";

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
  useEffect(() => {
    fetch(`https://rawg.io/api/games?token&key=${API_KEY}&page=3`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <main>
      <GameCard
        title="BioShock 2"
        price={500}
        previewImageURL="https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        href="/catalog/1"
      />
    </main>
  );
}
