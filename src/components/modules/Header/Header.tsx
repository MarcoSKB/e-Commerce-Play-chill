"use client";
import { useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

import { lockScrollScreen } from "@/src/utils/lockScrollScreen";
import { MajorSearch } from "@/src/components/modules";
import {
  Logotype,
  Navigation,
  Profile,
  Container,
} from "@/src/components/elements";
import { IconLink, BurgerMenu } from "@/src/components/ui";
import CloseButton from "./CloseButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuControl = useAnimationControls();

  const openMenu = () => {
    lockScrollScreen(true);
    menuControl.start("open");
    setIsOpen(true);
  };
  const closeMenu = () => {
    lockScrollScreen(false);
    menuControl.start("close");
    setIsOpen(false);
  };

  return (
    <header className="flex flex-col min-h-[75px] bg-black border-darkPurple border-b border-solid md:py-2 xl:py-6 xl:gap-4">
      <Container>
        <motion.nav
          className="absolute top-0 left-0 max-w-[100vw] max-h-[100vh] h-full w-full px-[30px] pt-[86px] py-6 md:px-0 md:pt-0 md:py-0 flex flex-col bg-darkBlue md:max-h-full md:h-auto md:min-h-0 md:static md:flex-row md:bg-transparent z-10"
          transition={{
            duration: 1,
            ease: "circOut",
          }}
          variants={{
            close: {
              left: "-150%",
            },
            open: {
              left: "0",
            },
          }}
          initial="close"
          animate={menuControl}
        >
          <div className="flex justify-between w-full md:items-center md:justify-between flex-wrap gap-6 md:gap-0 overflow-scroll md:overflow-visible">
            <Navigation closeMenu={closeMenu} />
            <Profile />
          </div>
        </motion.nav>
      </Container>
      <Container className="relative bg-black min-h-[75px] flex gap-5 md:mt-0 md:gap-8 items-center md:justify-between z-[30]">
        <AnimatePresence>
          <BurgerMenu
            openMenu={openMenu}
            isOpen={isOpen}
            menuControl={menuControl}
          />
        </AnimatePresence>
        <motion.div layout className="mr-[auto] md:mr-[0px]">
          <Logotype isOpen={isOpen} closeMenu={closeMenu} />
        </motion.div>
        <MajorSearch />
        <motion.div
          key="icon"
          className="flex gap-6 items-center md:min-w-[90px]"
        >
          <IconLink
            className="hidden md:flex"
            href="favorite"
            iconURL="/icons/heart-white.svg"
          />
          <CloseButton closeMenu={closeMenu} isOpen={isOpen} />
        </motion.div>
      </Container>
    </header>
  );
};

export default Header;
