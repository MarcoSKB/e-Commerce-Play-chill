import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props<T extends string> {
  type: "text" | "password" | "email";
  placeholder?: string;
  inputAtttibutes?: InputHTMLAttributes<HTMLInputElement>;
}

const Input = <T extends string>(props: Props<T>) => {
  const { type, placeholder = "", inputAtttibutes } = props;

  return (
    <input
      {...inputAtttibutes}
      type={type}
      placeholder={placeholder}
      className="px-6 py-4 w-full text-base font-normal bg-darkGray rounded-2xl focus:outline-none focus:outline-blue placeholder:opacity-20 placeholder:font-normal"
    />
  );
};

export default Input;
