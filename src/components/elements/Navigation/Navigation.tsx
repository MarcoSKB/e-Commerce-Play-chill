import Link from "next/link";
import React from "react";

interface INavList {
  title: string;
  href: string;
}

const navList: INavList[] = [
  {
    title: "Catalog",
    href: "products",
  },
  {
    title: "Advantages",
    href: "advantages",
  },
  {
    title: "Reviews",
    href: "reviews",
  },
];

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        {navList.map((item) => (
          <li key={item.href}>
            <Link
              href={`/${item.href}`}
              className="hover:text-blue transition-colors"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
