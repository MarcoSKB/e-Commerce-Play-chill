"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import Link from "next/link";
import axios from "axios";
import type { Session } from "next-auth";

import { LoadingSpin } from "@/src/components/ui";
import { PasswordInput, UsernameInput } from "..";

export interface ILoginFormInputs {
  username: string;
  password: string;
}

interface Props {
  session: Session | null;
}

const UserAuthForm: React.FC<Props> = ({ session }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginFormInputs>();

  const onSubmit: SubmitHandler<ILoginFormInputs> = async (data) => {
    try {
      if (session) {
        return toast.error("There was a problem", {
          description: "You are already logged in",
        });
      }

      const res = await signIn("default", {
        redirect: false,
        username: data.username,
        password: data.password,
      });

      if (res && res.error) {
        throw new Error(res.error);
      }

      toast.success("Succesfully log-in");
      router.replace("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);

        return toast.error("There was a problem", {
          description: error.response?.data.error.message,
        });
      }

      if (error instanceof Error) {
        console.error(error);

        return toast.error("There was a problem", {
          description: error.message,
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
