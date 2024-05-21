"use client";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

import { LoadingSpin } from "@/src/components/ui";
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
    try {
      await axios.post("/api/auth/sign-up", {
        username: data.username,
        email: data.email,
        password: data.pass,
      });

      return toast.success("Succesfully registered", {
        description: "Please verify your email",
      });
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
        className="flex justify-center w-full py-3 px-4 text-blue text-base font-semibold border-solid border-[2px] border-white border-opacity-10 rounded-2xl transition-colors hover:text-white focus-visible:outline-none focus-visible:outline-blue focus-visible:text-white disabled:focus-visible:text-gray-700 disabled:hover:text-gray-700 disabled:text-gray-700"
      >
        {isSubmitting && <LoadingSpin width={24} height={24} />}
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
