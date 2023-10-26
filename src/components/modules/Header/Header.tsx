import React from "react";
import {
  Logotype,
  Navigation,
  ProfileButton,
  Input,
  IconLink,
  Container,
} from "@/src/components/elements";

const Header: React.FC = () => {
  return (
    <header className="py-6 bg-black">
      <Container>
        <div className="flex flex-col gap-5">
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
