"use client";
import { Session } from "next-auth";
import Image from "next/image";

import { authAxios } from "@/src/api/authAxios";
import useAxios from "@/src/hooks/useAxios";

interface Props {
  className?: string;
  width: number;
}

const UserImage: React.FC<Props> = ({ className = "", width }) => {
  const [session] = useAxios<Session>({
    url: "/session",
    method: "GET",
    axiosInstance: authAxios,
  });

  return (
    <div
      className={`relative w-full rounded-full aspect-square outline outline-2 outline-green max-w-[${width}px] overflow-hidden ${className}`}
    >
      <Image
        quality={80}
        src={
          session && session?.user?.image
            ? session.user.image
            : "/images/template-profile.png"
        }
        alt="User avatar"
        sizes="w-12 h-12"
        fill
      />
    </div>
  );
};

export default UserImage;
