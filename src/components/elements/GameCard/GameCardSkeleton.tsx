import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[300px]">
      <div className="rounded-[15px] overflow-hidden">
        <Skeleton height={400} />
      </div>
      <div className="w-1/2">
        <Skeleton height={20} count={1} />
      </div>
      <Skeleton height={20} count={2} />
    </div>
  );
};

export default GameCardSkeleton;
