"use client";
import { useState } from "react";
import { Session } from "next-auth";

import useAxios from "@/src/hooks/useAxios";
import { authAxios } from "@/src/api/authAxios";
import { UserType } from "@/src/types/UserType";
import { Vote } from "@/src/types/VoteType";

import UserHeaderInfo from "./UserHeaderInfo";
import UserReviewActions from "./UserReviewActions";
import UserVoteRating from "./UserVoteRating";

interface Props {
  user: UserType;
  createdAt: string;
  rating: number;
  votes: Vote[];
  content: string;
  commentId: string;
}

const UsersReviewItem: React.FC<Props> = (props) => {
  const { user, createdAt, rating, votes, content, commentId } = props;

  const votesAmt = votes.reduce((acc, vote) => {
    if (vote.type === "UP") return acc + 1;
    if (vote.type === "DOWN") return acc - 1;
    return acc;
  }, 0);

  const [session] = useAxios<Session>({
    url: "/session",
    method: "GET",
    axiosInstance: authAxios,
  });
  const [votesAmount, setVotesAmount] = useState(votesAmt);

  const currentVote = votes.find((vote) => vote.userId === session?.user?.id);

  return (
    <div className="flex w-full">
      <UserVoteRating votes={votesAmount} />
      <div className="flex gap-6 w-full p-8 rounded-2xl border border-solid border-white border-opacity-10">
        <img
          className="w-[42px] h-[42px] rounded-full outline outline-2 outline-green"
          src={user.image ? user.image : "/images/template-profile.png"}
          alt="User profile"
        />
        <div className="flex flex-col gap-8 w-full">
          <UserHeaderInfo user={user} createdAt={createdAt} rating={rating} />
          <span>{content}</span>
          <UserReviewActions
            session={session}
            commentId={commentId}
            initVote={currentVote}
            setVotesAmount={setVotesAmount}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersReviewItem;
