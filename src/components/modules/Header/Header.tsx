import React from "react";
import {
  Logotype,
  Navigation,
  ProfileButton,
  Input,
  IconLink,
} from "@/src/components/elements";

// TODO:
// Make a adaptive
// Make API to get game list
// Style game lists

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-5 p-6">
      <div className="flex items-center justify-between">
        <Navigation />
        <ProfileButton isAuth={false} />
      </div>
      <div className="flex gap-8 items-center justify-between">
        <Logotype />
        <div className="max-w-[648px] w-full">
          <Input iconURL="/icons/union.svg" placeholder="Search" />
        </div>
        <div className="flex gap-6 items-center">
          <IconLink
            href="favorite"
            iconURL="/icons/like.svg"
            width={25}
            height={25}
          />
          <IconLink
            href="cart"
            iconURL="/icons/cart.svg"
            width={25}
            height={25}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
