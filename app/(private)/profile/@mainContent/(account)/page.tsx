"use client";

import {
  EditAvatar,
  UserInfoFields,
  UsernameFields,
} from "../../components/modules";
import { ProfileButton } from "../../components/elements";

export default function page() {
  return (
    <form className="flex-col">
      <h2 className="mb-6">Edit profile</h2>
      <div className="flex gap-x-8 gap-y-4">
        <EditAvatar />
        <UsernameFields />
      </div>
      <h2>Information</h2>
      <UserInfoFields />
      <ProfileButton onClick={() => {}}>Apply change</ProfileButton>
    </form>
  );
}
