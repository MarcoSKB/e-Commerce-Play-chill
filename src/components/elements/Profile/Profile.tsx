import Link from "next/link";
import { Session } from "next-auth";

import { authAxios } from "@/src/api/authAxios";
import useAxios from "@/src/hooks/useAxios";
import ProfileMenu from "./ProfileMenu";

const Profile = () => {
  const [session, error, loading] = useAxios<Session>({
    url: "/session",
    method: "GET",
    axiosInstance: authAxios,
  });

  if (loading) {
    return <span>Loading</span>;
  }

  if (session === null || session?.user === undefined) {
    return (
      <Link
        href="/sign-in"
        className="py-[8px] self-end text-xl font-semibold transition-colors hover:text-blue md:text-base"
      >
        Sign in
      </Link>
    );
  }

  return <ProfileMenu session={session} />;
};

export default Profile;
