import { AxiosError } from "axios";

import { GamePreviewInfo } from "@/src/types/GamePreviewDataInfo";
import SearchResultButton from "./SearchResultButton";
import SearchItemList from "./SearchItemList";

interface Props {
  data: GamePreviewInfo[] | undefined;
  gamesCount: number | undefined;
  isOpen: boolean;
  toggleSearch: () => void;
  loading: boolean;
  error: AxiosError | null;
}

const SearchResultList: React.FC<Props> = (props) => {
  const { isOpen, toggleSearch, data, gamesCount, loading, error } = props;

  return (
    <ul
      className={`absolute top-full md:p-2 xl:p-5 w-[100%] bg-white overflow-hidden ${
        isOpen
          ? "visible opacity-100 md:rounded-b-[20px] transition-all duration-300 max-h-[900px]"
          : "opacity-0 pointer-events-none invisible rounded-[20px] max-h-0"
      }`}
      onClick={() => {
        toggleSearch();
      }}
    >
      <SearchItemList gamesData={data} loading={loading} error={error} />
      <SearchResultButton
        gamesCount={gamesCount}
        toggleSearch={toggleSearch}
        loading={loading}
      />
    </ul>
  );
};

export default SearchResultList;
