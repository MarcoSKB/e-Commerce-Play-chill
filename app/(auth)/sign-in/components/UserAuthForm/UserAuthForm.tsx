"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

import { Input, LoadingSpin } from "@/src/components/ui";
import { PasswordInput, UsernameInput } from "..";

export interface ILoginFormInputs {
  username: string;
  password: string;
}

const UserAuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginFormInputs>();

  const onSubmit: SubmitHandler<ILoginFormInputs> = async (data) => {
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
      <div className="flex flex-col gap-3">
        <UsernameInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
      </div>
      <Link
        className="text-blue hover:text-white transition-colors self-end focus:outline-none focus:outline-blue focus:outline-offset-8 rounded-sm focus:text-white"
        href="/"
      >
        Forgot your password?
      </Link>
      <button
        disabled={isSubmitting}
        className="flex justify-center w-full py-3 px-4 text-blue text-base font-semibold border-solid border-[2px] border-white border-opacity-10 rounded-2xl transition-colors hover:text-white focus:outline-none focus:outline-blue focus:text-white disabled:focus:text-gray-700 disabled:hover:text-gray-700 disabled:text-gray-700"
      >
        {isSubmitting && <LoadingSpin width={24} height={24} />}
        Sign In
      </button>
    </form>
  );
};

export default UserAuthForm;
