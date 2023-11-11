import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";

import FormLogin from "../components/molecules/FormLogin";
import Logo from "../assets/SVG/Logo";

const Login = () => {
  return (
    <section className="mt-[74px] ">
      <div className="w-full mx-auto py-28">
        <div className="flex w-[500px] mx-auto mb-12 shadow-lg">
          <div className="flex flex-col justify-center items-center bg-gray-200/80 py-10 px-8 w-full rounded-lg shadow-lg">
            <div className="w-full ">
              <div className="flex justify-center items-center gap-x-3">
                <Logo className="h-10 w-10" />
                <div>
                  <h3 className="text-[24px] ">GrowMatch</h3>
                  <h3 className="text-sm -mt-2">Match and Grow Together</h3>
                </div>
              </div>
              <div className="mt-8 mb-4 px-8 py-4 text-center bg-white w-full">
                <span className="w-[60%] text-2xl">
                  Login to grow together with your friends.
                </span>
              </div>
              <button
                type="button"
                className="flex items-center justify-center space-x-4 py-3 px-6 text-white bg-[#079273] rounded-sm w-full"
              >
                <AiOutlineGoogle className="w-6 h-6" />
                <p className="text-2xl font-medium ">Masuk lewat google</p>
              </button>
              <div className="pt-6 flex flex-row justify-center items-center w-full space-x-4">
                <span className="h-[2px] bg-[#079273] w-full rounded-lg"></span>
                <span className="whitespace-nowrap text-[#079273] font-medium">
                  OR
                </span>
                <span className="h-[2px] bg-[#079273] w-full rounded-lg"></span>
              </div>

              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
