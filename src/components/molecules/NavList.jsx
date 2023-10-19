import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../libs/axios";

const NavList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.Auth);
  const { dataProfile } = useSelector((state) => state.Profile);
  const [dropdown, setDropdown] = useState(false);

  const onCLick = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.delete("api/v1/auth/logout");
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT_FULFILLED" });
      dispatch({ type: "PROFILE_LOGOUT" });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:w-7/12">
      <ul className="hidden md:flex items-center justify-end text-base font-medium space-x-4 text-[#5EDFA9]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>About Us</Link>
        </li>
        {!user ? (
          <li>
            <Link
              to="/login"
              type="button"
              className="px-8 py-2 font-base text-white bg-[#079273] rounded-tl-[42px] rounded-tr-[42px] rounded-br-[42px]"
            >
              Login
            </Link>
          </li>
        ) : (
          <li>
            <button
              onClick={() => setDropdown(!dropdown)}
              type="button"
              className="relative flex items-center space-x-3 py-1 px-2 rounded-md bg-teal-800"
            >
              <img
                src={Image.PersonOne}
                alt=""
                className="rounded-full h-6 w-6 object-cover"
              />
              <p className="text-white">
                {dataProfile && dataProfile?.firstName}
              </p>
            </button>
            {dropdown && (
              <div className="absolute right-0 top-[68px] bg-red-500 h-[150px] w-[150px] z-[9999]">
                <div className="py-3 flex flex-col justify-start">
                  <Link to="/profile" className="hover:bg-gray-200">
                    <button className="py-2 px-3">Profile</button>
                  </Link>
                  <button
                    className="hover:bg-gray-200 py-2 px-3"
                    onClick={onCLick}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavList;
