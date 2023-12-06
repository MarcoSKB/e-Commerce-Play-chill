import Image from "next/image";
import Link from "next/link";

interface Props {
  iconURL: string;
  // onClick
  href: string;
}

const IconLink: React.FC<Props> = (props) => {
  const { iconURL, href } = props;

  return (
    <Link
      href={href}
      className={`relative hover:opacity-70 transition-opacity w-[25px] h-[25px] z-[1]`}
    >
      <Image className="absolute w-full h-full" src={iconURL} fill alt="Icon" />
    </Link>
  );
};

export default IconLink;
