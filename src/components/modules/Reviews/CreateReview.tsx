"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";

import { UserImage } from "@/src/components/elements";
import RatingRadioInput from "./RatingRadioInput";

export interface IFormInputs {
  comment: string;
  rating: string;
}

interface Props {
  gameId: number | undefined;
  setUpdateReviewList: () => void;
}

const CreateReview: React.FC<Props> = ({ gameId, setUpdateReviewList }) => {
  const [rating, setRating] = useState("0");
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<IFormInputs>({
    defaultValues: {
      rating: "0",
    },
  });

  const handlerRadioInput = (value: string) => setRating(value);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      reset();
      handlerRadioInput("0");

      await axios.post("/api/reviews", {
        gameId: gameId,
        rating: +data.rating,
        content: data.comment,
      });

      setUpdateReviewList();
      return toast.success("Review succesfully added");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return toast.error("There was a problem", {
          description: error.response?.data.error,
        });
      }

      return toast.error("There was a problem", {
        description: "Please try later",
      });
    }
  };

  return (
    <div className="flex items-start mb-12">
      <UserImage className="mx-8 max-w-[48px]" />
      <form
        className="grid grid-cols-2 gap-8 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex flex-col gap-4">
          <h3
            className={`text-xl font-semibold ${
              errors.comment ? "text-rose-500" : ""
            }`}
          >
            Your comment {errors.comment && "*"}
          </h3>
          <textarea
            {...register("comment", {
              required: true,
              minLength: 5,
              maxLength: 196,
            })}
            className="h-[124px] py-3 px-4 rounded-xl bg-darkPurple resize-none placeholder:opacity-20 outline-none focus-visible:outline-blue"
            placeholder="Type your comment here..."
            maxLength={196}
          />
        </label>
        <RatingRadioInput
          setValue={setValue}
          register={register}
          errors={errors}
          setRating={handlerRadioInput}
          rating={rating}
        />
        <input
          type="submit"
          value="Submit comment"
          disabled={gameId === undefined || isLoading}
          className="py-3 px-8 bg-green rounded-xl w-fit text-lg font-bold transition-transform hover:scale-95 visited:scale-90 focus:outline-none focus:outline-blue disabled:bg-gray-600 disabled:hover:scale-100"
        />
      </form>
    </div>
  );
};

export default CreateReview;
