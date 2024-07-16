"use client";
import { SubmitHandler, useForm } from "react-hook-form";

import useAuthSession from "@/src/hooks/useAuthSession";
import {
  EditAvatar,
  UserInfoFields,
  UsernameFields,
} from "../../components/modules";
import { ProfileButton } from "../../components/elements";

// TODO:
//       Make loading for button submit ✓
//       Create LastName, Birthday properties in Prisma ✓
//       Add setValue to LastName, Birthday input fields ✓
//       Add Date picker for Birthday input field
//       Check previous and current userData for sending to the server
//       Make error validation
//       Make notification on success event
//       Create Avatar component for changing image from account
//       Create Database to storage images

export interface UserProfileInputs {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
}

export default function page() {
  const [session, loading] = useAuthSession();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<UserProfileInputs>();

  if (session !== null) {
    const { email, username, name, lastName, birthday } = session.user;

    setValue("email", email ? email : "");
    setValue("username", username ? username : "");
    setValue("firstName", name ? name : "");
    setValue("lastName", lastName ? lastName : "");
    setValue("birthday", birthday ? birthday : "");
  }

  const onSubmit: SubmitHandler<UserProfileInputs> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h2 className="text-xl font-semibold mb-6">Edit profile</h2>
      <div className="flex gap-x-8 gap-y-4 mb-11">
        <EditAvatar />
        <UsernameFields register={register} loading={loading} />
      </div>
      <h2 className="text-xl font-semibold mb-6">Information</h2>
      <UserInfoFields register={register} loading={loading} />
      <div className="self-end min-w-[188px]">
        <ProfileButton type="submit" loading={loading || isSubmitting}>
          Apply change
        </ProfileButton>
      </div>
    </form>
  );
}
