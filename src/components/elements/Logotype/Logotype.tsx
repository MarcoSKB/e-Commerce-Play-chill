import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logotype = () => {
  return (
    <Link
      href="/"
      className="flex gap-3 items-center font-extrabold text-[32px]"
    >
      <Image src="/logo.svg" height={32} width={32} alt="Logotype icon" />
      Playnchill
    </Link>
  );
};

export default Logotype;
