import { NextPage } from "next";
import { redirect } from "next/navigation";
import Verification from "./components/Verification/Verification";

interface Props {
  params: {
    token: string;
  };
}

const page: NextPage<Props> = ({ params }) => {
  if (!params.token) {
    redirect("/");
  }

  return <Verification token={params.token} />;
};

export default page;
