import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <div className="w-9/12 mr-4">
      <ul className="flex items-center justify-end text-base font-medium space-x-4 text-[#5EDFA9]">
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li className="/about-us">
          <Link>About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
