import React from "react";
import { UseFormRegister } from "react-hook-form";

import { InputField } from "../../elements";
import { UserProfileInputs } from "../../../@mainContent/(account)/page";

const usersInputInfoData = [
  {
    id: 0,
    label: "First name:",
    inputName: "firstName",
    type: "text",
  },
  {
    id: 1,
    label: "Last name:",
    inputName: "lastName",
    type: "text",
  },
  {
    id: 2,
    label: "Birthday:",
    inputName: "birthday",
    type: "text",
  },
] as {
  id: number;
  label: string;
  inputName: keyof UserProfileInputs;
  type: React.HTMLInputTypeAttribute;
}[];

interface Props {
  register: UseFormRegister<UserProfileInputs>;
  loading: boolean;
}

export default function UserInfoFields(props: Props) {
  const { register, loading } = props;
  return (
    <div className="flex flex-col mb-4 gap-4 min-w-[300px] w-fit">
      {usersInputInfoData.map((userInputInfo) => (
        <label
          className="flex items-center justify-between gap-3 w-full"
          key={userInputInfo.id}
        >
          <span className="min-w-[120px] text-sm opacity-70">
            {userInputInfo.label}
          </span>
          <InputField
            {...register(userInputInfo.inputName, { required: true })}
            loading={loading}
            type={userInputInfo.type}
          />
        </label>
      ))}
    </div>
  );
}
