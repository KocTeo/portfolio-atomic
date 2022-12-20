import Link from "next/link";
import React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const ALink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="text-3xl text-white">
      {children}
    </Link>
  );
};

export default ALink;
