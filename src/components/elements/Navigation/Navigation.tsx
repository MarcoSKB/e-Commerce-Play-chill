import Link from "next/link";
import { navigationLinks } from "@/src/data/navigationLinks";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        {navigationLinks.map((item) => (
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
