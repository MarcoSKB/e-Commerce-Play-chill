import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameCardSkeleton = () => {
  return (
    <div className="flex md:flex-col gap-[10px] sm:gap-4 w-full max-w-[100%]">
      <div className="rounded-[15px] overflow-hidden">
        <Skeleton className="h-[150px] md:h-[400px]" />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="w-1/2">
          <Skeleton className="h-[20px]" count={1} />
        </div>
        <Skeleton className="h-[20px] max-w-[60%]" count={2} />
      </div>
    </div>
  );
};

export default GameCardSkeleton;
