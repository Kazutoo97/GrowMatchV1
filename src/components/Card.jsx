import React from "react";
import LeftArrow from "../assets/SVG/LeftArrow";

const Card = ({ img }) => {
  return (
    <div className="border-2 rounded-md border-slate-200">
      <div className=" flex flex-col justify-center items-center text-center mx-4 my-4 ">
        <img
          src={img}
          alt="personOne"
          className="rounded-full w-[100px] h-[100px] object-cover"
        />
        <h1 className="pt-6 text-base font-bold text-gray-900">
          Darryl Pouros DDS
        </h1>
        <p className="text-xs pt-1 font-normal text-text">
          Banjarnegara, Jawa Tengah
        </p>
        <p className="pt-4 text-xs font-normal text-text">
          Bagaimana Darryl Pouros DDS seorang mahasiswa bule asal Universitas
          Negeri Surakarta mendapatkan pengalaman belajar yang luar biasa
          sebagai illustrator freelance
        </p>
        <p className="pt-6 text-xs text-emerald-300 font-medium">
          Data Science
        </p>

        <button
          type="button"
          className="flex justify-center items-center gap-7 text-sm text-white mt-2 px-[40px] py-2 bg-emerald-400 rounded-md"
        >
          Matching Now
          <span className="p-1">
            <LeftArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
