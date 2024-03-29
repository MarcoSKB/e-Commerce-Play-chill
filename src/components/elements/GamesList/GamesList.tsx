import { AxiosError } from "axios";

import { GameCard, GameCardSkeleton } from "@/src/components/ui";
import { GamePreviewInfo } from "@/src/types/GamePreviewDataInfo";

interface GamesListProps {
  games: GamePreviewInfo[] | undefined;
  error: AxiosError | null;
  loading: boolean;
  className?: string;
  skeletonCount?: number;
  sale?: number;
}

const GamesList: React.FC<GamesListProps> = (props) => {
  const { games, error, loading, className, skeletonCount = 12, sale } = props;

  if (loading) {
    return (
      <ul className={className}>
        {[...Array(skeletonCount)].map((_, index) => (
          <li key={index} className="flex w-full max-w-[100%]">
            <GameCardSkeleton />
          </li>
        ))}
      </ul>
    );
  }

  if (error) {
    return (
      <div>
        <h3>Something went wrong! Please try again.</h3>
        <br />
        <p className="text-rose-700">{error.message}</p>
      </div>
    );
  }

  return (
    <ul className={className}>
      {games?.length !== 0 ? (
        games?.map((game) => (
          <li key={game.id}>
            <GameCard
              id={game.id}
              previewImageURL={game.background_image}
              title={game.name}
              price={game.id}
              href={game.slug}
              store={game.stores}
              sale={sale}
            />
          </li>
        ))
      ) : (
        <div className="text-2xl">Games not found</div>
      )}
    </ul>
  );
};

export default GamesList;
