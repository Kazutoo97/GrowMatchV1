import React from "react";
import {
  KategoriOne,
  KategoriTwo,
  KategoriThree,
  KategoriFour,
} from "../assets";
import CardKategoriBelajar from "./molecules/CardKategoriBelajar";

const KategoriBelajar = () => {
  return (
    <section className="my-20 bg-[#CBF9DC]">
      <div className="px-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 mx-autopy-[70px]">
        <h1 className="font-bold text-[32px]">
          Kategori belajar di <span className="text-[#5EDFA9]">GrowMatch</span>
        </h1>
        <p className="text-2xl text-[#777777] pb-9">
          Beragam kategori subjek belajar yang tersedia dalam growmatch
        </p>
        <div className="flex space-x-4">
          <CardKategoriBelajar img={KategoriOne} title="Data Science" />
          <CardKategoriBelajar img={KategoriTwo} title="Quality Assurance" />
          <CardKategoriBelajar img={KategoriThree} title="Product Manager" />
          <CardKategoriBelajar img={KategoriFour} title="UI UX Designer" />
        </div>
      </div>
    </section>
  );
};

export default KategoriBelajar;
