import MenuIcon from "public/svgs/Menu_icon.svg";
import React from "react";

import Link from "../Atoms/Link";

const NavBar: React.FC = () => {
  const links = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Sobre Mim",
      path: "#about",
    },
    {
      name: "Portfólio",
      path: "#portfolio",
    },
    {
      name: "Contato",
      path: "#contact",
    },
  ];

  const toggleHidden = () => {
    const links = document.getElementById("links");
    if (links) {
      links.classList.toggle("hidden");
    }
  };

  return (
    <nav>
      <MenuIcon
        className="fill-white w-16 h-16 hover:fill-slate-900 ml-auto mr-3 md:hidden cursor-pointer"
        onClick={() => toggleHidden()}
      />
      <ul
        className="hidden bg-slate-800 justify-center md:flex md:bg-transparent"
        id="links"
      >
        {links.map((link) => (
          <li key={link.name} className="p-4 my-4 md:mx-8">
            <Link href={link.path}>{link.name}</Link>
            <hr className="mt-2 md:hidden" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
