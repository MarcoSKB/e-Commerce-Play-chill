"use client";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { isAxiosError } from "axios";

import { Button } from "@/src/components/ui";

const SignOut = () => {
  const onHandlerClick = async () => {
    try {
      await signOut();
      toast.success("You have been signed out successfully.");
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error("There was a problem", {
          description: error.message,
        });
      }
      toast.error("There was a problem", {
        description: "An error occurred when logging out of the account",
      });
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[515px] gap-6 mx-auto border-solid border-white border-opacity-10 border rounded-2xl py-8 px-6 my-[150px]">
      <h1 className="text-2xl text-white text-center font-bold mb-8">
        Sign Out
      </h1>
      <span className="text-lg max-w-[250px] text-center mx-auto">
        Are you sure you want to sign out of your account?
      </span>
      <Button title="Sign out" type="outline" onClick={onHandlerClick} />
    </div>
  );
};

export default SignOut;
