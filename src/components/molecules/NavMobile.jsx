import React from "react";
import { Link } from "react-router-dom";

const NavMobile = ({ menu }) => {
  return (
    <div
      className={`transform transition-transform duration-300 ${
        menu ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } absolute top-14 -right-3 h-[200px] w-[200px] bg-teal-700 rounded-lg z-[9999] lg:hidden`}
    >
      <ul className="flex flex-col h-full text-base font-medium p-4 text-white">
        <li className="px-4 py-2 rounded-lg hover:bg-teal-800/40">
          <Link to="/" className="flex">
            Home
          </Link>
        </li>
        <li className="px-4 py-2 rounded-lg hover:bg-teal-800/40">
          <Link className="flex">About Us</Link>
        </li>
        <li className="px-4 py-2 rounded-lg hover:bg-teal-800/40">
          <Link className="flex">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
