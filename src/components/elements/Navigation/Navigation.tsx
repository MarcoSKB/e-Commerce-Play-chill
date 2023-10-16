import Link from "next/link";
import React from "react";

interface INavList {
  title: string;
  href: string;
}

const navList: INavList[] = [
  {
    title: "Reviews",
    href: "reviews",
  },
  {
    title: "Guarantees",
    href: "guarantees",
  },
  {
    title: "How to buy",
    href: "how-to-buy",
  },
  {
    title: "Earn",
    href: "earn",
  },
];

const Navigation = () => {
  return (
    <ul className="flex gap-8">
      {navList.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="hover:text-blue transition-colors">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
