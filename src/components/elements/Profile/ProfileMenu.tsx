"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

import type { Session } from "next-auth";

const subMenuItems = [
  {
    id: 0,
    label: "Profile",
    href: "/profile",
  },
  {
    id: 1,
    label: "Settings",
    href: "/profile/settings",
  },
  {
    id: 2,
    label: "Log out",
    href: "/api/auth/signout",
  },
];

interface Props {
  session: Session;
}

const ProfileMenu: React.FC<Props> = (props) => {
  const { session } = props;
  const user = session.user;

  return (
    <Menu as="div" className="relative z-[31]">
      <Menu.Button className="flex items-center gap-6 hover:text-blue transition-colors focus-visible:outline-none rounded-md ui-focus-visible:outline-blue ui-focus-visible:outline-offset-8">
        <span className="font-semibold">
          {user.username ? user.username : user.name}
        </span>
        <div className="rounded-full w-[34px] h-[34px]">
          <Image
            className="w-full h-full outline outline-2 outline-green rounded-full"
            src={user.image ? user.image : "/images/template-profile.png"}
            width={34}
            height={34}
            alt="Profile avatar image"
          />
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="absolute top-[calc(100%+16px)] left-[-24px] flex flex-col px-6 py-[12px] w-[calc(100%+48px)] rounded-xl bg-darkPurple z-10 focus-visible:outline-none ui-focus-visible:outline-blue"
        >
          {subMenuItems.map((subMenu) => (
            <Menu.Item key={subMenu.id} as="li" className="flex w-full">
              <Link
                href={subMenu.href}
                className="w-full py-[8px] font-semibold transition-colors hover:text-blue"
              >
                {subMenu.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenu;
