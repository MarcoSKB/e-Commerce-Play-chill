import Skeleton from "react-loading-skeleton";

interface Props {
  className?: string;
}

const GameInfoSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={`flex w-full gap-[60px] ${className}`}>
      <div className="relative rounded-2xl overflow-hidden max-w-[350px] w-full h-[464px]">
        <Skeleton className="absolute w-full h-full" />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="relative max-w-[40%] w-full h-[50px]">
          <Skeleton className="absolute w-full h-full" />
        </div>
        <Skeleton width={85} height={18} />
        <Skeleton width={200} height={38} />
        <div className="flex gap-[10px] w-full ">
          <div className="rounded-[15px] overflow-hidden">
            <Skeleton width={115} height={64} />
          </div>
          <div className="rounded-[15px] overflow-hidden">
            <Skeleton width={178} height={64} />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="relative max-w-[55%] w-full h-[28px]">
            <Skeleton className="absolute w-full h-full" />
          </div>
          <div className="relative max-w-[55%] w-full h-[28px]">
            <Skeleton className="absolute w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfoSkeleton;
