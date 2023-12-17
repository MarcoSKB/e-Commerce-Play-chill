import { useState } from "react";

interface Props {
  votes: number;
}

const UserVoteRating: React.FC<Props> = ({ votes }) => {
  return (
    <div className="flex flex-col items-center gap-4 px-8 pt-11">
      <img
        className="max-w-[40px] w-full opacity-10"
        src="/icons/vote-arrow.svg"
        alt="Vote arrow"
      />
      <span className="text-2xl font-medium">{votes}</span>
      <img
        className="max-w-[40px] w-full opacity-10 rotate-180"
        src="/icons/vote-arrow.svg"
        alt="Vote arrow"
      />
    </div>
  );
};

export default UserVoteRating;
