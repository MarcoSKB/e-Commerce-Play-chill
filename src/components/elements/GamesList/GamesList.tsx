import React from "react";
import { GameCard } from "@/src/components/elements";
import { IGameCard } from "@/src/types/IGameCard";

interface IGamesList {
  gameData: IGameCard[];
}

const GamesList: React.FC<IGamesList> = (props) => {
  const { gameData } = props;
  return (
    <ul>
      {gameData.map((game) => (
        <GameCard previewImageURL={""} title={""} price={0} href={""} />
      ))}
    </ul>
  );
};

export default GamesList;
