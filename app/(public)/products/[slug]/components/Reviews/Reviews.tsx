"use client";
import { useState } from "react";

import { Section } from "@/src/components/modules";
import { UsersReviewList, UsersReviewListSkeleton } from "../";
import CreateReview from "./CreateReview";

interface Props {
  gameId: number | undefined;
}

const Reviews: React.FC<Props> = (props) => {
  const { gameId } = props;
  const [updateReviewList, setUpdateReviewList] = useState(false);

  const handleUpdateReviewList = () => {
    setUpdateReviewList(!updateReviewList);
  };

  return (
    <Section title="Reviews" className="flex flex-col mt-14">
      <CreateReview
        gameId={gameId}
        setUpdateReviewList={handleUpdateReviewList}
      />
      {gameId === undefined ? (
        <UsersReviewListSkeleton />
      ) : (
        <UsersReviewList gameId={gameId} updateReviewList={updateReviewList} />
      )}
    </Section>
  );
};

export default Reviews;
