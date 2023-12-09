"use client";
import { ChangeEvent, useState } from "react";

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
      <label className="flex flex-col gap-3">
        <span className="text-lg font-semibold">Email / Username</span>
        <Input
          type="text"
          inputValue={emailValue}
          setInputValue={setEmailValue}
          placeholder="Please enter your email or username..."
        />
      </label>
      <label className="flex flex-col gap-3">
        <span className="text-lg font-semibold">Password</span>
        <Input
          type="password"
          inputValue={passwordValue}
          setInputValue={setPasswordValue}
          placeholder="Please enter your password..."
        />
      </label>
      <button className="flex justify-center w-full py-3 px-4 text-blue text-base font-semibold border-solid border-[2px] border-white border-opacity-10 rounded-2xl transition-transform focus:outline-none focus:outline-blue hover:scale-95">
        Sign In
      </button>
    </form>
  );
};

export default UserAuthForm;
