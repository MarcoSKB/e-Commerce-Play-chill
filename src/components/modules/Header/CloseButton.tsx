"use client";

import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import { SvgComponent } from "@/src/components/ui";

interface Props {
  closeMenu: () => void;
  isOpen: boolean;
}

const CloseButton: React.FC<Props> = ({ closeMenu, isOpen }) => {
  return (
    <div className="flex w-[24px] h-[24px]">
      <AnimatePresence key="Close button" mode="wait" initial={false}>
        {isOpen ? (
          <button
            className="flex w-[24px] h-[24px] p-[4px]"
            onClick={closeMenu}
          >
            <span className="sr-only">Close menu</span>
            <SvgComponent
              keyProp="first"
              paths={[
                {
                  data: "M4.12485 5.49985L0 9.6247L1.37496 10.9997L5.49981 6.87481L9.62503 11L11 9.62508L6.87476 5.49985L10.9997 1.37496L9.6247 0L5.49981 4.1249L1.37529 0.000375345L0.000327914 1.37533L4.12485 5.49985Z",
                  fill: "white",
                },
              ]}
              viewBox="0 0 11 11"
            />
          </button>
        ) : (
          <Link
            href="cart"
            className="relative hover:opacity-70 transition-opacity w-[25px] h-[25px] focus:outline-none focus:outline-blue z-[1]"
          >
            <SvgComponent
              keyProp="second"
              paths={[
                {
                  data: "M2.65953 2.60856L0 2.36418L0.22549 0L4.49329 0.392171L5.59618 3.89179L24 5.58293L23.164 14.3485L7.19617 17.0039L2.65953 2.60856ZM6.37019 6.34781L8.88113 14.3153L20.9285 12.3119L21.3659 7.72578L6.37019 6.34781Z",
                  fill: "#77BE1D",
                },
                {
                  data: "M18.7707 22.6255C19.1047 22.6255 19.3755 22.3597 19.3755 22.0319C19.3755 21.704 19.1047 21.4382 18.7707 21.4382C18.4367 21.4382 18.1659 21.704 18.1659 22.0319C18.1659 22.3597 18.4367 22.6255 18.7707 22.6255ZM18.7707 25C20.4408 25 21.7947 23.6711 21.7947 22.0319C21.7947 20.3926 20.4408 19.0637 18.7707 19.0637C17.1006 19.0637 15.7468 20.3926 15.7468 22.0319C15.7468 23.6711 17.1006 25 18.7707 25Z",
                  fill: "#77BE1D",
                },
                {
                  data: "M9.09413 22.6255C9.42814 22.6255 9.69891 22.3597 9.69891 22.0319C9.69891 21.704 9.42814 21.4382 9.09413 21.4382C8.76011 21.4382 8.48934 21.704 8.48934 22.0319C8.48934 22.3597 8.76011 22.6255 9.09413 22.6255ZM9.09413 25C10.7642 25 12.1181 23.6711 12.1181 22.0319C12.1181 20.3926 10.7642 19.0637 9.09413 19.0637C7.42405 19.0637 6.07019 20.3926 6.07019 22.0319C6.07019 23.6711 7.42405 25 9.09413 25Z",
                  fill: "#77BE1D",
                },
              ]}
              viewBox="0 0 24 25"
            />
          </Link>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CloseButton;
