"use client";

import { GameCard } from "@/src/components/elements";
import { useEffect } from "react";

export default function Home() {
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
