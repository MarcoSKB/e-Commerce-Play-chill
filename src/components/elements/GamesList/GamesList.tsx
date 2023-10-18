import React from "react";
import { GameCard } from "@/src/components/elements";
import { GamePreviewDataInfo } from "@/src/types/GamePreviewDataInfo";

interface GamesListProps {
  data: GamePreviewDataInfo[];
  className?: string;
}

const GamesList: React.FC<GamesListProps> = (props) => {
  const { data, className } = props;
  return (
    <ul className={className}>
      {data.map((game) => (
        <GameCard
          key={game.id}
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
