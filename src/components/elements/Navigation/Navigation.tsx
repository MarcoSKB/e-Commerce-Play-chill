import Link from "next/link";
import { navigationLinks } from "@/src/data/navigationLinks";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navigationLinks.map((item) => (
          <li key={item.href} className="flex">
            <Link
              href={`/${item.href}`}
              className="hover:text-blue transition-colors py-[6px] focus:outline-none focus:outline-blue"
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
