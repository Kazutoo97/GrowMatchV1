import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";

const MainLogo = () => {
  return (
    <div className="w-2/12 flex ">
      <Link className="flex items-center justify-center space-x-3 font-lato">
        <Logo className="w-8 h-8" />
        <div className="flex flex-col items-start justify-start text-[#026966] py-2 ">
          <div className="text-lg -mt-1 font-bold">GrowMatch</div>
          <div className="text-xs font-normal -mt-2 tracking-wider">
            Match and Grow Together
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainLogo;
