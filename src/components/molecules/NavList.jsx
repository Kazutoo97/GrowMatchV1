import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <div className="md:w-7/12">
      <ul className="hidden md:flex items-center justify-end text-base font-medium space-x-4 text-[#5EDFA9]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>About Us</Link>
        </li>
        <li>
          <Link
            to="/login"
            type="button"
            className="px-8 py-2 font-base text-white bg-[#079273] rounded-tl-[42px] rounded-tr-[42px] rounded-br-[42px]"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
