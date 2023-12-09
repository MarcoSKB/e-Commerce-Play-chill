"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

import { LoadingSpin } from "@/src/components/elements";

const FastAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const logInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (err) {
      toast.error("There was a problem", {
        description: "There was an error logging in with google",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full h-[1px] bg-white bg-opacity-20" />
      <button
        disabled={isLoading}
        onClick={() => logInWithGoogle()}
        className="flex items-center justify-center w-full py-3 px-4 text-blue text-base font-semibold border-solid border-[2px] border-white border-opacity-10 rounded-2xl transition-transform focus:outline-none focus:outline-blue hover:scale-95 disabled:text-gray-700 disabled:hover:scale-100"
      >
        {isLoading && <LoadingSpin width={24} height={24} />}
        Sign in with Google
      </button>
    </div>
  );
};

export default FastAuth;
