import { AxiosError } from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { GameCard } from "@/src/components/elements";
import { GamePreviewInfo } from "@/src/types/GamePreviewDataInfo";

interface GamesListProps {
  games: GamePreviewInfo[] | undefined;
  error: AxiosError | null;
  loading: boolean;
  className?: string;
}

const GamesList: React.FC<GamesListProps> = (props) => {
  const { games, error, loading, className } = props;

  if (loading) {
    return (
      <ul className={className}>
        {[...Array(12)].map((_, index) => (
          <li key={index} className="flex flex-col gap-4 max-w-[300px] w-full">
            <div className="rounded-[15px] overflow-hidden">
              <Skeleton height={400} />
            </div>
            <div className="w-1/2">
              <Skeleton height={20} count={1} />
            </div>
            <Skeleton height={20} count={2} />
          </li>
        ))}
      </ul>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul className={className}>
      {games?.map((game) => (
        <li key={game.id}>
          <GameCard
            id={game.id}
            previewImageURL={game.background_image}
            title={game.name}
            price={game.id}
            href={game.slug}
            store={game.stores}
          />
        </li>
      ))}
    </ul>
  );
};

export default GamesList;
