import { getServerSession } from "next-auth";
import Link from "next/link";

import { authOptions } from "@/src/libs/auth";
import ProfileMenu from "./ProfileMenu";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <Link href="/sign-in">Sing in</Link>;
  }

  return <ProfileMenu session={session} />;
};

export default Profile;
