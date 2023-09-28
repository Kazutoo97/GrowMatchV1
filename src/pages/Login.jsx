import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";

const Login = () => {
  return (
    <section className="mt-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex w-[500px] mx-auto mb-12">
          <div className="flex flex-col justify-center items-center bg-gray-200 py-6 px-9 w-full rounded-lg shadow-lg">
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
              <form>
                <div className="flex flex-col w-full pt-6 space-y-6">
                  <div className="flex ">
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full h-[3rem] rounded-full px-5"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full h-[3rem] rounded-full px-5"
                    />
                  </div>
                  <p className="pt-4 text-sm text-center">
                    By signing up, you agree to our Terms , Privacy Policy and
                    Cookies Policy .
                  </p>

                  <button
                    type="button"
                    className="flex items-center justify-center space-x-4 py-3 px-6 text-white bg-[#079273] rounded-sm w-full text-2xl"
                  >
                    Login
                  </button>
                  <Link className="text-[#079273] text-right font-normal">
                    Forgot password?
                  </Link>

                  <div className="mt-4  bg-white flex items-center justify-center">
                    <p className="px-8 py-4">
                      Havn’t an account?{" "}
                      <Link to="/register" className="text-[#079273]">
                        Register
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
