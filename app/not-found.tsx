import { redirect } from "next/navigation";

export default function Custom404() {
  redirect("/");
  return <>404 page</>;
}
