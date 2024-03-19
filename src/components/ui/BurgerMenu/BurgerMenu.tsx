"use client";
import { AnimationControls, motion } from "framer-motion";

interface Props {
  openMenu: () => void;
  isOpen: boolean;
  menuControl: AnimationControls;
}

const BurgerMenu: React.FC<Props> = (props) => {
  const { openMenu, isOpen, menuControl } = props;

  if (isOpen) {
    return null;
  }

  return (
    <motion.button
      id="menu button"
      type="button"
      onClick={openMenu}
      className="relative min-w-[32px] p-[6px] box-content min-h-[32px] md:hidden"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute left-0 top-0 w-full h-full pl-[6px] flex justify-center flex-col gap-[5px]">
        <div className="h-[2px] bg-white transition-[width] w-[22px]" />
        <div className="h-[2px] bg-white transition-[width] w-[14px]" />
      </div>
      <span className="sr-only">Navigation button</span>
    </motion.button>
  );
};

export default BurgerMenu;
