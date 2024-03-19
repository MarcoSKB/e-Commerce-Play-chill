import Image from "next/image";
import Link from "next/link";

interface Props {
  iconURL: string;
  className?: string;
  href: string;
}

const IconLink: React.FC<Props> = (props) => {
  const { iconURL, href, className = "" } = props;

  return (
    <Link
      href={href}
      className={`relative hover:opacity-70 transition-opacity w-[25px] h-[25px] focus:outline-none focus:outline-blue z-[1] ${className}`}
    >
      <Image className="absolute w-full h-full" src={iconURL} fill alt="Icon" />
    </Link>
  );
};

export default IconLink;
