import React from "react";
import {
  Logotype,
  Navigation,
  ProfileButton,
  Input,
} from "@/components/elements";

// TODO: Change color on hover link
//     : Make a adaptive
//     : Make a button for cart and like

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <Navigation />
        <ProfileButton />
      </div>
      <div className="flex gap-8">
        <Logotype />
        <div className="max-w-[648px] w-full">
          <Input iconURL="/icons/union.svg" placeholder="Search" />
        </div>
      </div>
    </header>
  );
};

export default Header;
