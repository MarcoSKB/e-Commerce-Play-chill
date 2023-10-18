import React from "react";
import { GameCard } from "@/src/components/elements";
import { GameDataInfo } from "@/src/types/GameDataInfo";

interface GamesListProps {
  data: GameDataInfo[];
  className?: string;
}

const GamesList: React.FC<GamesListProps> = (props) => {
  const { data, className } = props;
  return (
    <ul className={`${className}`}>
      {data.map((game) => (
        <GameCard
          previewImageURL={game.background_image}
          title={game.name}
          price={game.id}
          href={game.slug}
        />
      ))}
    </ul>
  );
};

export default GamesList;
