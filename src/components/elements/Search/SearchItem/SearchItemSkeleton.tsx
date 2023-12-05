import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SearchItemSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#D6D6D6" highlightColor="#BDBDBD">
      <div className="flex w-full p-4 gap-5">
        <Skeleton height={143} width={114} />
        <div className="flex flex-col gap-1">
          <Skeleton height={26} width={200} />
          <Skeleton height={32} width={500} />
          <Skeleton height={18} width={500} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SearchItemSkeleton;
