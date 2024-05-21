"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { Session } from "next-auth";
import { toast } from "sonner";

import { Vote } from "@/src/types/VoteType";
import usePrevious from "@/src/hooks/usePrevious";
import { reviewsAxios } from "@/src/api/getReviewsAxios";
import { LoadingSpin } from "@/src/components/ui";

interface Props {
  session: Session | null;
  commentId: string;
  initVote: PartialVote | undefined;
  setVotesAmount: Dispatch<SetStateAction<number>>;
}

type PartialVote = Pick<Vote, "type">;

type PandingStates = "UP LOADING" | "DOWN LOADING" | "LOADED";

const UserReviewActions: React.FC<Props> = (props) => {
  const { session, initVote, commentId, setVotesAmount } = props;
  const [currentVote, setCurrentVote] = useState(initVote);
  const [isPendingState, setIsPendingState] = useState<PandingStates>("LOADED");
  const prevVote = usePrevious(currentVote);

  useEffect(() => {
    setCurrentVote(initVote);
  }, [initVote]);

  const onVoteHandler = async (voteType: PartialVote["type"]) => {
    try {
      const data: Pick<Vote, "type" | "commentId"> = {
        commentId,
        type: voteType,
      };

      setIsPendingState(() =>
        voteType === "UP" ? "UP LOADING" : "DOWN LOADING"
      );
      await reviewsAxios.patch("/vote", data);

      if (currentVote?.type === voteType) {
        setCurrentVote(undefined);
        if (voteType === "UP") {
          setVotesAmount((prev) => prev - 1);
        } else if (voteType === "DOWN") {
          setVotesAmount((prev) => prev + 1);
        }
      } else {
        setCurrentVote({ ...currentVote, type: voteType });

        if (voteType === "UP") {
          setVotesAmount((prev) => prev + (currentVote ? 2 : 1));
        } else if (voteType === "DOWN") {
          setVotesAmount((prev) => prev - (currentVote ? 2 : 1));
        }
      }
    } catch (error) {
      setCurrentVote(prevVote);

      if (axios.isAxiosError(error)) {
        return toast.error("There was a problem", {
          description: error.response?.data.error,
        });
      }

      return toast.error("There was a problem", {
        description: "Voting update error",
      });
    } finally {
      setIsPendingState("LOADED");
    }
  };

  return (
    <div className="flex gap-6">
      <button
        type="button"
        onClick={() => onVoteHandler("UP")}
        className={`flex gap-3 p-3 rounded-[14px] transition-transform hover:scale-95 visited:scale-90 focus-visible:outline-none focus-visible:outline-blue ${
          currentVote?.type === "UP" && isPendingState === "LOADED"
            ? "bg-green"
            : "bg-darkGray"
        } ${isPendingState === "UP LOADING" ? "bg-slate-600" : ""}`}
      >
        {isPendingState === "UP LOADING" ? (
          <LoadingSpin width={20} height={20} />
        ) : (
          <img className="w-5 h-5" src="/icons/like.svg" alt="Like icon" />
        )}
        <span className="text-sm font-semibold">Vote up</span>
      </button>
      <button
        type="button"
        onClick={() => onVoteHandler("DOWN")}
        className={`flex gap-3 p-3 rounded-[14px] transition-transform hover:scale-95 visited:scale-90 focus-visible:outline-none focus-visible:outline-blue ${
          currentVote?.type === "DOWN" && isPendingState === "LOADED"
            ? "bg-rose-500"
            : "bg-darkGray"
        } ${isPendingState === "DOWN LOADING" ? "bg-slate-600" : ""}`}
      >
        {isPendingState === "DOWN LOADING" ? (
          <LoadingSpin width={20} height={20} />
        ) : (
          <img
            className="w-5 h-5 rotate-180"
            src="/icons/like.svg"
            alt="Dislike icon"
          />
        )}
        <span className="text-sm font-semibold">Vote down</span>
      </button>
    </div>
  );
};

export default UserReviewActions;
