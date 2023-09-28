import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-1/12 flex items-center justify-end ">
      <Link
        to="/login"
        type="button"
        className="px-8 py-2 font-base text-white bg-[#079273] rounded-tl-[42px] rounded-tr-[42px] rounded-br-[42px]"
      >
        Login
      </Link>
    </div>
  );
};

export default Login;
