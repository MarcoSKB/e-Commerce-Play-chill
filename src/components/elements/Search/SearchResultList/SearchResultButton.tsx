import Link from "next/link";

interface Props {
  gamesCount: number | undefined;
  setIsActive: (value: boolean) => void;
  loading: boolean;
}

const SearchResultButton: React.FC<Props> = (props) => {
  const { gamesCount = 0, setIsActive, loading } = props;
  const isMoreGames = !!(gamesCount - 3);

  return (
    <li
      onClick={() => setIsActive(false)}
      className={`text-center py-3 ${loading ? "pointer-events-none" : ""}`}
    >
      <Link
        href="/products"
        className="font-bold text-xl opacity-80 hover:opacity-100 transition-opacity focus:outline-none rounded-md focus-visible:outline-blue focus-visible:outline-offset-8"
      >
        <span className={`${loading ? "text-gray-700" : "text-blue"}`}>
          View all
        </span>
        {isMoreGames && (
          <span className="text-gray-500 font-bold ml-2">+{gamesCount}</span>
        )}
      </Link>
    </li>
  );
};

export default SearchResultButton;
