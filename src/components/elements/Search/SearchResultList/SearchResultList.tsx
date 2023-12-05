import { AxiosError } from "axios";

import { GamePreviewInfo } from "@/src/types/GamePreviewDataInfo";
import SearchResultButton from "./SearchResultButton";
import SearchItemList from "./SearchItemList";

interface Props {
  data: GamePreviewInfo[] | undefined;
  gamesCount: number | undefined;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  loading: boolean;
  error: AxiosError | null;
}

const SearchResultList: React.FC<Props> = (props) => {
  const { isActive, setIsActive, data, gamesCount, loading, error } = props;

  return (
    <ul
      className={`absolute top-full p-5 transition-all duration-300 w-[100%] bg-white overflow-hidden ${
        isActive
          ? "visible opacity-100 rounded-b-[20px] max-h-[900px]"
          : "opacity-0 pointer-events-none invisible rounded-[20px] max-h-0"
      }`}
    >
      <SearchItemList
        gamesData={data}
        setIsActive={setIsActive}
        loading={loading}
        error={error}
      />
      <SearchResultButton
        gamesCount={gamesCount}
        setIsActive={setIsActive}
        loading={loading}
      />
    </ul>
  );
};

export default SearchResultList;
