"use client";
import useAxios from "@/src/hooks/useAxios";
import { reviewsAxios } from "@/src/api/getReviewsAxios";

import { UserType } from "@/src/types/UserType";
import { Vote } from "@/src/types/VoteType";

import UsersReviewItem from "../UserReviewItem/UserReviewItem";
import UsersReviewListSkeleton from "./UsersReviewListSkeleton";

interface ReviewResponse {
  id: string;
  gameId: number;
  content: string;

  createdAt: string;
  updatedAt: string;
  rating: number;

  author: UserType;
  authorId: string;
  votes: Vote[];
}

interface Props {
  gameId: number;
  updateReviewList: boolean;
}

const UsersReviewList: React.FC<Props> = ({ gameId, updateReviewList }) => {
  const [reviews, error, loading] = useAxios<ReviewResponse[]>({
    url: `/${gameId}`,
    method: "GET",
    axiosInstance: reviewsAxios,
    dependency: [updateReviewList],
  });

  if (loading) {
    return <UsersReviewListSkeleton />;
  }

  if (error) {
    return (
      <div>
        <h3>Something went wrong! Please try again.</h3>
        <br />
        <p className="text-rose-700">{error.message}</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-8">
      {!(reviews?.length === 0) ? (
        reviews?.map((review) => (
          <li key={review.id}>
            <UsersReviewItem
              user={review.author}
              createdAt={review.createdAt}
              content={review.content}
              rating={review.rating}
              votes={review.votes}
              commentId={review.id}
            />
          </li>
        ))
      ) : (
        <li className="flex flex-col py-6 px-4 text-center border-solid border border-white border-opacity-10 rounded-2xl">
          <h4 className="text-xl font-semibold mb-2">
            This product has no reviews
          </h4>
          <p className="opacity-50">
            You can write a review of this product to share your experience with
            the community.
          </p>
        </li>
      )}
    </ul>
  );
};

export default UsersReviewList;
