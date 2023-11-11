import React from "react";

const ResetPassword = () => {
  return (
    <form>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-gray-600 mb-2">
          Ubah Kata Sandi
        </h1>
        <div className="flex flex-col my-4 gap-y-6">
          <div className="flex flex-col">
            <label
              for="old-password"
              className="text-sm font-medium text-gray-900 "
            >
              Old Password
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <input
              type="password"
              id="old-password"
              className="h-12 mt-1 text-gray-600 font-medium rounded-md border-2 border-gray-600/20 focus:border-2 focus:border-primaryFive focus:outline-none p-4"
            />
          </div>
          <div className="flex flex-col">
            <label
              for="old-password"
              className="text-sm font-medium text-gray-900 "
            >
              New Password
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <input
              type="password"
              id="old-password"
              className="h-12 mt-1 text-gray-600 font-medium rounded-md border-2 border-gray-600/20 focus:border-2 focus:border-primaryFive focus:outline-none p-4"
            />
          </div>
          <div className="flex flex-col">
            <label
              for="old-password"
              className="text-sm font-medium text-gray-900 "
            >
              Confirm Password
              <span className="text-xs text-red-500 ml-1">*</span>
            </label>
            <input
              type="password"
              id="old-password"
              className="h-12 mt-1 text-gray-600 font-medium rounded-md border-2 border-gray-600/20 focus:border-2 focus:border-primaryFive focus:outline-none p-4"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="button"
            className="px-10 rounded-md text-white py-2 inline-flex self-end bg-primaryFive hover:bg-primarySeven transition duration-300"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
