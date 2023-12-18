import { MajorSearch } from "@/src/components/modules";
import {
  Logotype,
  Navigation,
  Profile,
  Container,
} from "@/src/components/elements";
import { IconLink } from "@/src/components/ui";

const Header = () => {
  return (
    <header className="py-6 bg-black">
      <Container className="flex flex-col gap-[14px]">
        <div className="flex items-center justify-between">
          <Navigation />
          <Profile />
        </div>
        <div className="relative min-h-[64px] flex gap-8 items-center justify-between z-[30] ">
          <Logotype />
          <MajorSearch />
          <div className="flex gap-6 items-center min-w-[90px]">
            <IconLink href="favorite" iconURL="/icons/heart-white.svg" />
            <IconLink href="cart" iconURL="/icons/cart-green.svg" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
