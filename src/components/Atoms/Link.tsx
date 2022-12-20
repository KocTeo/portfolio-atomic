import Link from "next/link";
import React from "react";

interface LinkProps {
  href: string;
  name: string;
}

const ALink: React.FC<LinkProps> = ({ href, name }) => {
  return (
    <Link href={href} className="text-3xl text-white">
      {name}
    </Link>
  );
};

export default ALink;
