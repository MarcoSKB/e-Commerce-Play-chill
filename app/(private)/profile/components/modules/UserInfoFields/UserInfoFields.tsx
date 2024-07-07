import React from "react";
import { InputField } from "../../elements";

export default function UserInfoFields() {
  return (
    <div className="flex flex-col gap-4 min-w-[300px] w-fit">
      <label className="flex justify-between w-full">
        First name:
        <InputField />
      </label>
      <label className="flex justify-between w-full">
        Last name:
        <InputField />
      </label>
      <label className="flex justify-between w-full">
        Birthday:
        <InputField />
      </label>
    </div>
  );
}
