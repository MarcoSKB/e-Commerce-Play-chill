import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  iconURL: string;
  // onClick
  width: number;
  height: number;
  href: string;
}

const IconLink: React.FC<Props> = (props) => {
  const { iconURL, width, height, href } = props;

  return (
    <Link href={href} className="hover:opacity-70 transition-opacity">
      <Image src={iconURL} width={width} height={height} alt="Icon" />
    </Link>
  );
};

export default IconLink;
