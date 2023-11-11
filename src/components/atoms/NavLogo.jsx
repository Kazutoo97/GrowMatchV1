import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/SVG/Logo";

const NavLogo = () => {
  return (
    <div>
      <Link to="/">
        <Logo className="w-[140px] md:w-[160px] h-[30px] md:h-[50px] " />
      </Link>
    </div>
  );
};

export default NavLogo;
