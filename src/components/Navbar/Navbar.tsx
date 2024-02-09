import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const routes = [
  { name: "Nosotros", link: "/" },
  { name: "Cartas", link: "/cartas" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="shadow-md w-full top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src="public/logo.png" className="w-12 h-12" />
          <span>Mimic Store</span>
        </div>
        <div onClick={() => setOpen(!open)} className="md:hidden w-7 h-7">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 space-x-8 transition-all duration-500 ease-in ${
            open ? "block" : "hidden md:block"
          }`}
        >
          {routes.map((route) => (
            <li className="font-semibold">
              <Link
                to={route.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
