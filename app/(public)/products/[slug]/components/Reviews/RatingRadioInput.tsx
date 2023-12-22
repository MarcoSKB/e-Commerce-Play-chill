import { ChangeEvent } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IReviewFormInputs } from "./CreateReview";

interface Props {
  setValue: UseFormSetValue<IReviewFormInputs>;
  setRating: (value: string) => void;
  rating: string;
  register: UseFormRegister<IReviewFormInputs>;
  errors: FieldErrors<IReviewFormInputs>;
}

const RatingRadioInput: React.FC<Props> = (props) => {
  const { setValue, setRating, rating, register, errors } = props;

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("rating", e.target.value);
    setRating(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <h3
        className={`text-xl font-semibold ${
          errors.rating ? "text-rose-500" : ""
        }`}
      >
        Select rating {errors.rating && "*"}
      </h3>
      <div className="flex gap-1 px-5 py-3 w-fit rounded-lg border border-white border-solid border-opacity-10">
        <label
          className={`relative w-6 h-[23px] bg-cover transition-transform origin-center hover:scale-90 star ${
            +rating >= 1
              ? "bg-[url('/icons/star/star.svg')]"
              : "bg-[url('/icons/star/star-empty.svg')]"
          }`}
        >
          <input
            {...register("rating", { required: true })}
            className="absolute w-full h-full opacity-0"
            onChange={handleRadioChange}
            type="radio"
            value={1}
          />
        </label>
        <label
          className={`relative w-6 h-[23px] bg-cover transition-transform origin-center hover:scale-90 star ${
            +rating >= 2
              ? "bg-[url('/icons/star/star.svg')]"
              : "bg-[url('/icons/star/star-empty.svg')]"
          }`}
        >
          <input
            {...register("rating", { required: true })}
            className="absolute w-full h-full opacity-0"
            onChange={handleRadioChange}
            type="radio"
            value={2}
          />
        </label>
        <label
          className={`relative w-6 h-[23px] bg-cover transition-transform origin-center hover:scale-90 star ${
            +rating >= 3
              ? "bg-[url('/icons/star/star.svg')]"
              : "bg-[url('/icons/star/star-empty.svg')]"
          }`}
        >
          <input
            {...register("rating", { required: true })}
            className="absolute w-full h-full opacity-0"
            onChange={handleRadioChange}
            type="radio"
            value={3}
          />
        </label>
        <label
          className={`relative w-6 h-[23px] bg-cover transition-transform origin-center hover:scale-90 star ${
            +rating >= 4
              ? "bg-[url('/icons/star/star.svg')]"
              : "bg-[url('/icons/star/star-empty.svg')]"
          }`}
        >
          <input
            {...register("rating", { required: true })}
            className="absolute w-full h-full opacity-0"
            onChange={handleRadioChange}
            type="radio"
            value={4}
          />
        </label>
        <label
          className={`relative w-6 h-[23px] bg-cover transition-transform origin-center hover:scale-90 star ${
            +rating >= 5
              ? "bg-[url('/icons/star/star.svg')]"
              : "bg-[url('/icons/star/star-empty.svg')]"
          }`}
        >
          <input
            {...register("rating", { required: true })}
            className="absolute w-full h-full opacity-0"
            onChange={handleRadioChange}
            type="radio"
            value={5}
          />
        </label>
      </div>
    </div>
  );
};

export default RatingRadioInput;
