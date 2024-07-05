import Link from "next/link";

import useAuthSession from "@/src/hooks/useAuthSession";
import ProfileMenu from "./ProfileMenu";

const Profile = () => {
  const [session, loading] = useAuthSession();

  // TODO: Make loading component better

  if (loading) {
    return <span>Loading</span>;
  }

  if (session === null || session?.user === undefined) {
    return (
      <Link
        href="/sign-in"
        className="py-[8px] md:self-end text-xl font-semibold transition-colors hover:text-blue md:text-base"
      >
        Sign in
      </Link>
    );
  }

  return <ProfileMenu session={session} />;
};

export default Profile;
