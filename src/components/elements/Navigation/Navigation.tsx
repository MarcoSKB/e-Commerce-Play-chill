import Link from "next/link";
import { navigationLinks } from "@/src/data/navigationLinks";

interface Props {
  closeMenu: () => void;
}

const Navigation: React.FC<Props> = ({ closeMenu }) => {
  return (
    <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
      {navigationLinks.map((item) => (
        <li
          key={item.href}
          className="flex text-2xl font-semibold md:text-base"
        >
          <Link
            href={`/${item.href}`}
            className="hover:text-blue transition-colors py-[6px] focus-visible:outline-none focus-visible:outline-blue"
            onClick={closeMenu}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
