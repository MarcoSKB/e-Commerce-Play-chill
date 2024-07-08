"use client";
import {
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form";

import {
  EditAvatar,
  UserInfoFields,
  UsernameFields,
} from "../../components/modules";
import { ProfileButton } from "../../components/elements";

export interface UserProfileInputs {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
}

export default function page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserProfileInputs>();
  const onSubmit: SubmitHandler<UserProfileInputs> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h2 className="text-xl font-semibold mb-6">Edit profile</h2>
      <div className="flex gap-x-8 gap-y-4 mb-11">
        <EditAvatar />
        <UsernameFields register={register} />
      </div>
      <h2 className="text-xl font-semibold mb-6">Information</h2>
      <UserInfoFields register={register} />
      <div className="self-end min-w-[188px]">
        <ProfileButton type="submit">Apply change</ProfileButton>
      </div>
    </form>
  );
}
