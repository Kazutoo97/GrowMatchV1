import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Footer from "../components/Footer";
import UbahProfile from "../components/UbahProfile";
import ResetPassword from "../components/ResetPassword";

const Profile = () => {
  return (
    <>
      <div className="mt-[74px]">
        <div className="wrapper-edit container max-w-7xl mx-auto">
          <div className="container-edit w-full">
            <h2 className="Title-ubah-profile pt-8 text-xl font-bold text-gray-600">
              Edit Profile
            </h2>
            <div className="container-content flex w-full mt-4">
              <div className="left-bar flex w-[30%] h-fit mr-8 rounded-lg bg-white border border-gray-600/20">
                <div className="left-bar-wrapper flex flex-col w-full h-full my-2">
                  <Link
                    to="/profile/ubah-profile"
                    className="inline-flex py-2 px-4 hover:bg-primaryThree font-medium text-gray-600"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/profile/ubah-kata-sandi"
                    className="inline-flex py-2 px-4 hover:bg-primaryThree font-medium text-gray-600"
                  >
                    Reset Password
                  </Link>
                </div>
              </div>

              <div className="right-bar flex w-[70%] h-full bg-white rounded-lg border border-gray-600/20 mb-10">
                <div className="left-bar-wrapper flex flex-col w-full h-full py-5 px-8 ">
                  <Routes>
                    <Route
                      path="/profile/ubah-profile"
                      element={<UbahProfile />}
                    />
                    <Route
                      path="/profile/ubah-kata-sandi"
                      element={<ResetPassword />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
