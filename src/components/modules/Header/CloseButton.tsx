"use client";

import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import { SvgComponent } from "@/src/components/ui";

const svgPaths = [
  {
    data: "M4.12485 5.49985L0 9.6247L1.37496 10.9997L5.49981 6.87481L9.62503 11L11 9.62508L6.87476 5.49985L10.9997 1.37496L9.6247 0L5.49981 4.1249L1.37529 0.000375345L0.000327914 1.37533L4.12485 5.49985Z",
    fill: "white",
  },
];

interface Props {
  closeMenu: () => void;
  isOpen: boolean;
}

const CloseButton: React.FC<Props> = ({ closeMenu }) => {
  return (
    <div className="flex w-[24px] h-[24px]">
      <button className="flex w-[24px] h-[24px] p-[4px]" onClick={closeMenu}>
        <span className="sr-only">Close menu</span>
        <SvgComponent keyProp="first" paths={svgPaths} viewBox="0 0 11 11" />
      </button>
    </div>
  );
};

export default CloseButton;
