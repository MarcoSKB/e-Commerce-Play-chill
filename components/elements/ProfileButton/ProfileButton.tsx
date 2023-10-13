"use client";
import React from "react";
import Image from "next/image";

interface Props {
  isAuth?: boolean;
  profileName?: string;
  avatarImage?: React.ReactNode;
}

const ProfileButton: React.FC<Props> = (props) => {
  const { isAuth, profileName, avatarImage } = props;
  return (
    <button
      className="flex items-center gap-6"
      type="button"
      onClick={() => console.log("Profile clicked!")}
    >
      <span>Hanzed Rules</span>
      <div className="rounded-full w-[34px] h-[34px]">
        <Image
          className="w-full h-full"
          src="/images/template-profile.png"
          width={34}
          height={34}
          alt="Profile avatar image"
        />
      </div>
    </button>
  );
};

export default ProfileButton;
