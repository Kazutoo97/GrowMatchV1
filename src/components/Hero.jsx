import React from "react";
import { Person } from "../assets";

const Hero = () => {
  return (
    <section id="hero" className="pt-36 bg-gray-200 ">
      <div className="px-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 mx-auto">
        <div className="flex flex-col items-center md:items-center w-full h-full">
          <div className="flex-auto md:w-5/12 flex flex-col justify-center items-center">
            <p className="text-base md:text-lg font-medium">
              More than a <span className="text-teal-500 ">social media</span>
            </p>
            <h1 className="font-semibold text-4xl md:text-5xl leading-[1.2] flex flex-col items-center justify-center">
              <span>Glow Up with</span>{" "}
              <span className="text-teal-500 font-bold">
                GrowMatch <span className="text-black font-semibold">to</span>
              </span>
              <span>Grow Together</span>
            </h1>
            <div className="h-1 w-[90%] bg-teal-500 rounded-full mt-3 mb-5 md:mt-5 md:mb-8"></div>
            <p className="font-medium text-center text-xs md:text-sm w-[85%]">
              Lorem ipsum dolor sit amet consectetur. Risus facilisis in pretium
              vel. Ut pretium tempor duis erat porttitor{" "}
            </p>
          </div>
          <div className="flex w-full flex-auto md:w-7/12 md:ml-8 md:pb-14 md:mt-8">
            <div className="flex w-full md:justify-start md:items-end relative h-[380px] md:h-[450px] py-6 px-8 ">
              <div className="absolute  md:h-[402px] bg-[#CBF9DC] rounded-tl-[10rem] rounded-br-[8rem] md:rounded-tl-[10rem] md:rounded-br-[10rem] md:rounded-tr-md shadow-xl "></div>
              <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] md:top-[50%] md:-translate-y-[50%] md:left-[50%] md:-translate-x-[50%] rounded-full bg-teal-500 md:bg-white w-[250px] h-[250px] md:w-[360px] md:h-[360px] shadow-lg "></div>
              <img
                src={Person}
                alt="person"
                className="w-[200px] md:w-[340px] absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] md:top-0 md:left-[50%] md:-translate-x-[50%] "
              />

              <button
                type="button"
                className="absolute bottom-[4rem] left-[50%] -translate-x-[50%] py-2 w-[280px] md:bottom-6 md:left-0 md:py-5 md:w-[80%] text-white font-medium bg-teal-600 rounded-e-full rounded-tl-full text-xl md:text-3xl shadow-lg "
              >
                Match Now
              </button>
              <div className="absolute md:-left-8 rounded-full bg-white md:w-[80px] md:h-[80px] shadow-lg "></div>
              <div className="absolute md:top-[8rem] md:-left-8 rounded-full bg-white md:w-[80px] md:h-[80px] shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
