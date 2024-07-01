"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href: string;
}

const ProfileLink: React.FC<Props> = (props) => {
  const { children, href } = props;
  const pathname = usePathname();
  const isActive = pathname == `/profile${href}`;

  return (
    <Link
      href={`/profile${href}`}
      className={`flex py-[10px] px-5 w-full font-medium bg-black rounded-lg transition-all ease-out ${
        isActive
          ? "text-blue pointer-events-none"
          : "text-white text-opacity-30 hover:text-opacity-70 hover:pl-[32px]"
      }`}
    >
      {children}
    </Link>
  );
};

export default ProfileLink;
