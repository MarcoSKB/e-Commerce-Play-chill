import Skeleton from "react-loading-skeleton";
import UsersReviewItem from "../UserReviewItem/UserReviewItem";

const UsersReviewListSkeleton = () => {
  return (
    <ul className="flex flex-col gap-8">
      {[...Array(2)].map((_, index) => (
        <li key={index} className="flex w-full">
          <div className="flex flex-col items-center gap-4 px-8 pt-11">
            <img
              className="max-w-[40px] w-full opacity-10"
              src="/icons/vote-arrow.svg"
              alt="Vote arrow"
            />
            <Skeleton width={24} height={32} />
            <img
              className="max-w-[40px] w-full opacity-10 rotate-180"
              src="/icons/vote-arrow.svg"
              alt="Vote arrow"
            />
          </div>
          <div className="flex gap-6 w-full p-8 rounded-2xl border border-solid border-white border-opacity-10">
            <Skeleton width={43} height={43} circle />
            <div className="flex flex-col w-full gap-8">
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-1">
                  <Skeleton height={23} width={120} />
                  <Skeleton height={18} width={60} />
                </div>
                <Skeleton height={24} width={120} />
              </div>
              <Skeleton height={18} count={3} />
              <div className="flex gap-6">
                <div className="relative w-[107px] h-[42px] rounded-[14px] overflow-hidden">
                  <Skeleton className="absolute top-[-5px] w-full h-full" />
                </div>
                <div className="relative w-[107px] h-[42px] rounded-[14px] overflow-hidden">
                  <Skeleton className="absolute top-[-5px] w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersReviewListSkeleton;
