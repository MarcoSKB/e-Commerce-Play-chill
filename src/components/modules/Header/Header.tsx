import React from "react";
import { MajorSearch } from "@/src/components/modules";
import {
  Logotype,
  Navigation,
  ProfileButton,
  IconLink,
  Container,
} from "@/src/components/elements";

const Header: React.FC = () => {
  return (
    <header className="py-6 bg-black">
      <Container className="flex flex-col gap-[14px]">
        <div className="flex items-center justify-between">
          <Navigation />
          <ProfileButton isAuth={false} />
        </div>
        <div className="relative min-h-[64px] flex gap-8 items-center justify-between z-[30] ">
          <Logotype />
          <MajorSearch />
          <div className="flex gap-6 items-center min-w-[90px]">
            <IconLink
              href="favorite"
              iconURL="/icons/heart-white.svg"
              width={25}
              height={25}
            />
            <IconLink
              href="cart"
              iconURL="/icons/cart-green.svg"
              width={25}
              height={25}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
