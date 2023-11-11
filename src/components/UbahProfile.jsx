import React from "react";
import Images from "../assets";

const UbahProfile = () => {
  return (
    <>
      <h2 className="text-gray-600 text-xl font-bold mb-4">Profile</h2>
      <form>
        <div className="flex items-center">
          <img
            src={Images.Avatar1}
            alt="Avatar"
            className="h-32 w-32 rounded-full mr-6 shadow-sm border border-[rgba(0,0,0,0.1)] cursor-pointer"
          />
          <input type="file" id="file-input" className="hidden" />
          <label
            for="file-input"
            className="px-6 py-2 bg-primaryFive cursor-pointer rounded-lg text-white hover:bg-primarySeven transition-all duration-300"
          >
            Upload Foto
          </label>
        </div>

        <div className="mt-6 flex flex-col">
          <label for="" className="text-sm font-medium">
            First Name
            <span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            className="h-12 mt-1 text-gray-600 font-medium rounded-md border-2 border-gray-600/20 focus:border-2 focus:border-primaryFive focus:outline-none p-4"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label for="" className="text-sm font-medium">
            Last Name <span className="text-xs text-red-500">*</span>
          </label>
          <input
            type="text"
            className="h-12 mt-1 rounded-md border-2 border-gray-600/20 focus:border-2 focus:border-primaryFive focus:outline-none p-4"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label for="" className="text-sm font-medium ml-1">
            Username <span className="text-xs text-red-500">*</span>
          </label>
          <input
            type="text"
            className="h-12 mt-1 text-gray-600 font-medium rounded-md border-2 border-gray-600/20 focus:border-2 focus:border-primaryFive focus:outline-none p-4"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label for="" className="text-sm font-medium">
            Email <span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            className="h-12 mt-1 text-gray-600 font-medium rounded-md border-2 border-gray-600/20 focus:border-2 focus:border-primaryFive focus:outline-none p-4"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label for="" className="text-sm font-medium">
            Profile Link
            <span className="text-xs text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            className="h-12 mt-1 text-gray-600 font-medium rounded-md border-2 border-gray-600/20 focus:border-2 focus:border-primaryFive focus:outline-none p-4"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label for="" className="text-sm font-medium">
            Bio
          </label>
          <textarea className="h-44 mt-1  text-gray-600 font-medium rounded-md border-2 border-gray-600/20 focus:border-2 focus:border-primaryFive focus:outline-none p-4" />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="mt-10 px-10 rounded-md text-white py-2 inline-flex self-end bg-primaryFive hover:bg-primarySeven transition duration-300"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UbahProfile;
