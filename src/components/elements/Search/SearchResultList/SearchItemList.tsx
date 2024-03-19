import { AxiosError } from "axios";

import { GamePreviewInfo } from "@/src/types/GamePreviewDataInfo";
import { SearchItem } from "@/src/components/elements";
import SearchItemSkeleton from "../SearchItem/SearchItemSkeleton";

interface Props {
  gamesData: GamePreviewInfo[] | undefined;
  loading: boolean;
  error: AxiosError | null;
}

const SearchItemList: React.FC<Props> = (props) => {
  const { gamesData, loading, error } = props;

  if (loading) {
    return (
      <>
        {[...Array(3)].map((_, index) => (
          <li key={index} className="flex w-full max-w-[100%]">
            <SearchItemSkeleton />
          </li>
        ))}
      </>
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
    <>
      {gamesData?.map((game) => (
        <li key={game.id}>
          <SearchItem
            id={game.id}
            slug={game.slug}
            title={game.name}
            price={game.id}
            imgURL={game.background_image}
          />
        </li>
      ))}
    </>
  );
};

export default SearchItemList;
