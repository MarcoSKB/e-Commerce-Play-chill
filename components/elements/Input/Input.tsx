"use client";
import React, { useState } from "react";

interface Props {
  iconURL: string;
  className?: string;
  placeholder: string;
  onChange?: () => void;
  //   FIXME: onChange
}

const Input: React.FC<Props> = (props) => {
  const { placeholder, className, onChange, iconURL } = props;
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative flex w-full h-16">
      <input
        className={`absolute w-full h-full z-10 bg-darkGray rounded-2xl p-5 focus:outline-none ${className}`}
        placeholder={placeholder}
        onChange={(e) => inputHandler(e)}
        value={inputValue}
        type="text"
      />
      <img
        src={iconURL}
        alt="Input icon"
        className="absolute w-6 h-6 z-20 right-6 top-5 opacity-20"
      />
    </div>
  );
};

export default Input;
