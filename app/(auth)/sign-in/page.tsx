import { getServerSession } from "next-auth";
import Link from "next/link";

import { authOptions } from "@/src/libs/auth";
import { Container } from "@/src/components/elements";
import { UserAuthForm, FastAuth } from "./components";

const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Container className="pt-8 mb-12">
      <div className="flex flex-col items-center max-w-[514px] mx-auto gap-6  rounded-3xl">
        <div className="flex flex-col items-center">
          <img
            className="w-full max-w-[100px] aspect-square mb-5 bg-darkPurple p-4 rounded-3xl"
            src="/logo.svg"
            alt="Logotype playnchill"
          />
          <h1 className="text-2xl font-extrabold">Welcome to PlaynChill</h1>
        </div>
        <UserAuthForm session={session} />
        <FastAuth />
        <Link
          className="text-blue hover:text-white transition-colors self-center focus-visible:outline-none focus-visible:outline-blue focus-visible:outline-offset-8 rounded-sm focus-visible:text-white"
          href="/sign-up"
        >
          Dont have an account? Register
        </Link>
      </div>
    </Container>
  );
};

export default page;
