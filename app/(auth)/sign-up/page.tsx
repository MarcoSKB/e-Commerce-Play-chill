import Link from "next/link";

import { Container } from "@/src/components/elements";
import { RegisterForm } from "./components";

const page = () => {
  return (
    <Container className="pt-8 mb-12">
      <div className="flex flex-col items-center max-w-[514px] mx-auto gap-6  rounded-3xl">
        <div className="flex flex-col items-center">
          <img
            className="w-full max-w-[100px] aspect-square mb-5 bg-darkPurple p-4 rounded-3xl"
            src="/logo.svg"
            alt="Logotype playnchill"
          />
          <h1 className="text-2xl font-extrabold">Register form</h1>
        </div>
        <RegisterForm />
        <Link
          className="text-blue hover:text-white transition-colors self-center focus-visible:outline-none focus-visible:outline-blue focus-visible:outline-offset-8 rounded-sm focus-visible:text-white"
          href="/sign-in"
        >
          Do you have an account? Sign-in
        </Link>
      </div>
    </Container>
  );
};

export default page;
