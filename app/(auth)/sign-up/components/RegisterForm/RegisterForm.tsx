"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, LoadingSpin } from "@/src/components/ui";
import { EmailInput, PasswordInput, UsernameInput } from "..";

export interface IRegisterFormInputs {
  username: string;
  email: string;
  pass: string;
  repeatPass: string;
}

const RegisterForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterFormInputs>();

  const onSubmit: SubmitHandler<IRegisterFormInputs> = async (data) => {
    //TODO: Fetch api
    // Reset after success submitting
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-6 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <UsernameInput register={register} errors={errors} />
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} watch={watch} />
      <button
        disabled={isSubmitting}
        type="submit"
        className="flex justify-center w-full py-3 px-4 text-blue text-base font-semibold border-solid border-[2px] border-white border-opacity-10 rounded-2xl transition-colors hover:text-white focus:outline-none focus:outline-blue focus:text-white disabled:focus:text-gray-700 disabled:hover:text-gray-700 disabled:text-gray-700"
      >
        {isSubmitting && <LoadingSpin width={24} height={24} />}
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
