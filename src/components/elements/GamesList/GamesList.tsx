import React from "react";
import { GameCard } from "@/src/components/elements";
import { GamePreviewInfo } from "@/src/types/GamePreviewDataInfo";

interface GamesListProps {
  data: GamePreviewInfo[] | undefined;
  className?: string;
}

const GamesList: React.FC<GamesListProps> = (props) => {
  const { data, className } = props;

  if (data === undefined) {
    return <div>Loading</div>;
  }

  return (
    <ul className={className}>
      {data.map((game) => (
        <li key={game.id}>
          <GameCard
            previewImageURL={game.background_image}
            title={game.name}
            price={game.id}
            href={game.slug}
          />
        </li>
      ))}
    </ul>
  );
};

export default GamesList;
