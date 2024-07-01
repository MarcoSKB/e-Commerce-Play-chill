import { LinksList, LogOutButton } from "./components";

export default function page() {
  return (
    <ul className="flex flex-col min-h-[376px] w-full gap-3 p-3">
      <LinksList />
      <LogOutButton />
    </ul>
  );
}
