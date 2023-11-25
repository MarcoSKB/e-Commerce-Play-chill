import { SearchItem } from "@/src/components/elements";
import { GamePreviewInfo } from "@/src/types/GamePreviewDataInfo";
import Link from "next/link";

interface Props {
  gamesData: GamePreviewInfo[];
  gamesCount: number;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

const SearchResultList: React.FC<Props> = (props) => {
  const { isActive, setIsActive, gamesData, gamesCount } = props;

  const isMoreGames = !!(gamesCount - 3);

  return (
    <ul
      className={`absolute top-full p-5 transition-all duration-300 w-[100%] bg-white overflow-hidden ${
        isActive
          ? "visible opacity-100 rounded-b-[20px] max-h-[900px]"
          : "opacity-0 pointer-events-none invisible rounded-[20px] max-h-0"
      }`}
    >
      {gamesData.map((game) => (
        <li key={game.id} onClick={() => setIsActive(false)}>
          <SearchItem
            id={game.id}
            slug={game.slug}
            title={game.name}
            price={game.id}
            imgURL={game.background_image}
          />
        </li>
      ))}
      <li onClick={() => setIsActive(false)} className="text-center py-3">
        <Link
          href="/products"
          className="font-bold text-xl opacity-80 hover:opacity-100 transition-opacity"
        >
          <span className="text-blue">View all</span>
          {isMoreGames && (
            <span className="text-gray-500 font-bold ml-2">+{gamesCount}</span>
          )}
        </Link>
      </li>
    </ul>
  );
};

export default SearchResultList;
