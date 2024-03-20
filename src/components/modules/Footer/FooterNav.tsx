import Link from "next/link";

const footerData = [
  {
    label: "About Us",
    links: [
      {
        title: "Reviews",
        href: "/reviews",
      },
      {
        title: "Advantages",
        href: "/advantages",
      },
      {
        title: "Support",
        href: "/support",
      },
    ],
  },
  {
    label: "The offer Agreement",
    links: [
      {
        title: "Catalog",
        href: "/products",
      },
      {
        title: "Discounts",
        href: "/#discounts",
      },
    ],
  },
  {
    label: "Account",
    links: [
      {
        title: "Personal account",
        href: "/account",
      },
      {
        title: "Settings",
        href: "/account/settings",
      },
    ],
  },
];

const FooterNav = () => {
  return (
    <div className="flex gap-x-8 md:gap-x-28 xl:gap-x-40 gap-y-9 pb-8 px-4 flex-wrap border-b border-solid border-darkBlue">
      {footerData.map((list, idx) => (
        <ul key={idx} className="flex flex-col gap-4 md:gap-5 flex-wrap">
          <li className="text-xl md:text-2xl font-semibold">{list.label}</li>
          {list.links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="text-sm md:text-lg text-[#CDCDCF] transition-colors hover:text-blue focus:outline-none focus:outline-offset-8 focus:outline-blue focus:text-blue"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default FooterNav;
