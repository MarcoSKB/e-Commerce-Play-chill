"use client";
import useAuthSession from "@/src/hooks/useAuthSession";

export default function page() {
  const [session, loading] = useAuthSession();

  if (loading) {
    return <>Loading</>;
  }

  if (session == null) {
    return <>null</>;
  }
  return <div>Account page</div>;
}
