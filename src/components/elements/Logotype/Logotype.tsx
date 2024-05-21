"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useMediaQuery from "@/src/hooks/useMediaQuery";

interface Props {
  isOpen?: boolean;
  closeMenu: () => void;
}

const Logotype: React.FC<Props> = ({ isOpen = false, closeMenu }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Link
      href="/"
      className="text-[20px] xl:text-[32px] flex gap-2 xl:gap-3 items-center font-extrabold focus-visible:outline-none focus-visible:outline-blue"
      onClick={closeMenu}
    >
      <motion.img
        animate={
          isOpen
            ? {
                height: "33px",
                width: "33px",
              }
            : isMobile
            ? {
                height: "24px",
                width: "24px",
              }
            : {
                height: "32px",
                width: "32px",
              }
        }
        src="/logo.svg"
        className="w-6 h-6 xl:w-8 xl:h-8"
        alt="Logotype icon"
      />
      <motion.span
        animate={
          isOpen
            ? {
                opacity: 0,
                width: 0,
                pointerEvents: "none",
              }
            : {
                opacity: 1,
                width: "auto",
                pointerEvents: "all",
              }
        }
      >
        Playnchill
      </motion.span>
    </Link>
  );
};

export default Logotype;
