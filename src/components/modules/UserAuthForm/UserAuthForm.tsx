"use client";
import { useState } from "react";
import Link from "next/link";

import { Input } from "@/src/components/elements";

const UserAuthForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col gap-6 w-full"
      onClick={(e) => onSubmitHandler(e)}
    >
      <div className="flex flex-col gap-3">
        <label className="flex flex-col gap-3">
          <span className="text-lg font-medium opacity-40">
            Email / Username
          </span>
          <Input
            type="text"
            inputValue={emailValue}
            setInputValue={setEmailValue}
            placeholder="Please enter your email or username..."
          />
        </label>
        <label className="flex flex-col gap-3">
          <span className="text-lg font-medium opacity-40">Password</span>
          <Input
            type="password"
            inputValue={passwordValue}
            setInputValue={setPasswordValue}
            placeholder="Please enter your password..."
          />
        </label>
      </div>
      <Link
        className="text-blue hover:text-white transition-colors self-end focus:outline-none focus:outline-blue focus:outline-offset-8 rounded-sm focus:text-white"
        href="/"
      >
        Forgot your password?
      </Link>
      <button className="flex justify-center w-full py-3 px-4 text-blue text-base font-semibold border-solid border-[2px] border-white border-opacity-10 rounded-2xl transition-colors hover:text-white focus:outline-none focus:outline-blue focus:text-white disabled:focus:text-gray-700 disabled:hover:text-gray-700 disabled:text-gray-700">
        Sign In
      </button>
    </form>
  );
};

export default UserAuthForm;
