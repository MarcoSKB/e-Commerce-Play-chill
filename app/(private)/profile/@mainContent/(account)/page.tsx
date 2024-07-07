"use client";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  EditAvatar,
  UserInfoFields,
  UsernameFields,
} from "../../components/modules";
import { ProfileButton } from "../../components/elements";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h2 className="text-xl font-semibold mb-6">Edit profile</h2>
      <div className="flex gap-x-8 gap-y-4 mb-11">
        <EditAvatar />
        <UsernameFields />
      </div>
      <h2 className="text-xl font-semibold mb-6">Information</h2>
      <UserInfoFields />
      <div className="self-end min-w-[188px]">
        <ProfileButton onClick={() => {}} type="submit">
          Apply change
        </ProfileButton>
      </div>
    </form>
  );
}
