"use client";
import { useAppSelector } from "@/src/hooks/reduxHooks";
import React from "react";

export default function CartQtty() {
  const cartQtty = useAppSelector((state) => state.productsCart.length);
  return (
    <span className="text-5xl">
      Cart <span className="text-green">{cartQtty}</span>
    </span>
  );
}
