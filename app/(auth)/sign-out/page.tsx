import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { authOptions } from "@/src/libs/auth";
import { Container } from "@/src/components/elements";
import { SignOut } from "./components/";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <Container className="pt-8 mb-12">
      <SignOut />
    </Container>
  );
};

export default page;
