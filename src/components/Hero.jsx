import React from "react";
import { Person } from "../assets";

const Hero = () => {
  return (
    <section id="hero" className="pt-36 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-center items-center">
          <div className="w-6/12 text-[#230E15]">
            <p className="font-medium text-xl">
              More than a <span className="text-[#5EDFA9]">social media</span>
            </p>
            <h1 className="mt-2 font-semibold text-7xl flex flex-col leading-[4.5rem] ">
              <span>Glow Up with</span>
              <span className="text-[#5EDFA9] font-bold">
                GrowMatch{" "}
                <span className="font-semibold text-[#230E15]">to</span>
              </span>
              <span> Grow Together</span>
            </h1>
            <span className="mt-9 h-2 w-[85%] bg-[#5EDFA9] block rounded-full"></span>
            <p className="font-medium text-sm mt-5 w-[80%] ">
              Lorem ipsum dolor sit amet consectetur. Risus facilisis in pretium
              vel. Ut pretium tempor duis erat porttitor
            </p>
          </div>
          <div className="relative w-6/12 z-10">
            <div className="flex items-end justify-center ">
              <img src={Person} alt="Person" className="h-[450px] z-10 " />
              <button
                type="button"
                className="text-3xl text-white font-semibold absolute bottom-0 left-0 px-[220px] rounded-tl-[190px] rounded-tr-[150px] rounded-br-[150px] py-5 bg-[#079273] z-10 "
              >
                Match Now
              </button>
              <div className="z-8 absolute top-0 left-0 bg-[#CBF9DC] h-full w-full rounded-tr-lg rounded-tl-[200px] rounded-br-[200px] shadow-lg"></div>
              <div className="z-9 absolute top-[70px] left-[140px] bg-white w-[410px] h-[410px] rounded-full "></div>
              <div className="z-9 absolute top-[100px] -left-[30px] bg-white w-[100px] h-[100px] rounded-full shadow-lg"></div>
              <div className="z-9 absolute top-[70px] -right-[30px] bg-white w-[80px] h-[80px] rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
