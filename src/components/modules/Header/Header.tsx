"use client";
import { useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

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
    menuControl.start("open");
    setIsOpen(true);
  };
  const closeMenu = () => {
    menuControl.start("close");
    setIsOpen(false);
  };

  return (
    <header className="flex flex-col min-h-[75px] bg-black border-darkPurple border-b border-solid md:py-2 xl:py-6 xl:gap-4">
      <Container>
        <motion.nav
          className="absolute top-0 left-0 max-w-[100vw] max-h-[100vh] min-h-[400px] h-full w-full px-[30px] pt-[86px] py-6 flex justify-end flex-col-reverse gap-7 bg-darkBlue overflow-y-scroll z-10 md:max-h-full md:h-auto md:min-h-0 md:pt-0 md:py-0 md:px-0 md:static md:flex-row md:gap-0 md:items-center md:justify-between md:bg-transparent md:overflow-y-auto"
          transition={{
            duration: 1,
            ease: "circOut",
          }}
          variants={{
            close: {
              left: "-150%",
              overflowY: "auto",
            },
            open: {
              left: "0",
              overflowY: "scroll",
            },
          }}
          initial="close"
          animate={menuControl}
        >
          <Navigation closeMenu={closeMenu} />
          <Profile />
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
