import { ProfileLinkData } from "@/src/types/profileLinkData";
import { ProfileLink } from "../../../components/elements";

const profileLinksData: ProfileLinkData[] = [
  {
    name: "Account",
    href: "",
    permission: "default",
  },
  {
    name: "Payment",
    href: "/payment",
    permission: "default",
  },
  {
    name: "Billing history",
    href: "/history",
    permission: "default",
  },
];

export default function LinksList() {
  return (
    <>
      {profileLinksData.map((link) => (
        <li key={link.href}>
          <ProfileLink href={link.href}>{link.name}</ProfileLink>
        </li>
      ))}
    </>
  );
}
