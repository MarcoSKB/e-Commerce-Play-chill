"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch(`https://rawg.io/api/games?token&key=${process.env.RAWG_API_KEY}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return <main>Main</main>;
}
