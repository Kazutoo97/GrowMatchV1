import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MainLogo = ({ menu, setMenu }) => {
  return (
    <div className="w-full md:w-4/12 flex items-center justify-between">
      <Link className="flex items-center justify-center space-x-2 lg:space-x-3 font-lato ">
        <Logo className="md:w-8 md:h-8 w-12 h-12" />
        <div className="flex flex-col items-start justify-start text-[#026966] py-2 ">
          <div className="w-full text-xl lg:text-lg lg:-mt-1 font-bold">
            GrowMatch
          </div>
          <div className="w-full text-xs md:text-xs font-normal -mt-1 lg:-mt-2 tracking-wider">
            Match and Grow Together
          </div>
        </div>
      </Link>
      <div className="md:hidden cursor-pointer" onClick={() => setMenu(!menu)}>
        <div className="p-2">
          {!menu ? (
            <AiOutlineMenu className="h-6 w-6 text-teal-800 font-bold" />
          ) : (
            <AiOutlineClose className="h-6 w-6 text-teal-800" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLogo;
