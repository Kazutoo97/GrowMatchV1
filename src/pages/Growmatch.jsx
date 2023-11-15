import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Growmatch = () => {
  return (
    <div className="pt-[74px] container mx-auto max-w-4xl">
      <div className="pt-28">
        <form>
          <div className="flex flex-col w-full gap-6">
            <div className="w-full h-12 relative shadow-lg ">
              <input
                type="text"
                className="w-full h-full pl-4 pr-20 border-2 border-gray-400/60 rounded-md outline-none focus:border-primaryFive"
              />
              <button
                type="button"
                className="absolute top-0 right-0 h-full w-16 flex items-center justify-center bg-primaryFive rounded-e-lg"
              >
                <AiOutlineSearch className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="flex flex-col w-full gap-y-6 mb-16">
              <div className="flex justify-center items-center gap-6">
                <button
                  type="button"
                  className="bg-primaryThree px-4 py-2 rounded-md text-gray-950 font-semibold hover:bg-primaryFive/40"
                >
                  Frontend Developer
                </button>
                <button
                  type="button"
                  className="bg-primaryThree px-4 py-2 rounded-md text-gray-950 font-semibold shadow-md hover:bg-primaryFive/40"
                >
                  Quality Assurance
                </button>
              </div>
              <div className="flex justify-center items-center gap-6">
                <button
                  type="button"
                  className="bg-primaryThree px-4 py-2 rounded-md text-gray-950 font-semibold shadow-md hover:bg-primaryFive/40"
                >
                  Data Science
                </button>
                <button
                  type="button"
                  className="bg-primaryThree px-4 py-2 rounded-md text-gray-950 font-semibold shadow-md hover:bg-primaryFive/40"
                >
                  Frontend Developer
                </button>
                <button
                  type="button"
                  className="bg-primaryThree px-4 py-2 rounded-md text-gray-950 font-semibold shadow-md hover:bg-primaryFive/40"
                >
                  Quality Assurance
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="px-16 py-2 bg-primaryFive hover:bg-primarySeven text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-md"
            >
              Match Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Growmatch;
