import React from "react";
import Card from "./Card";
import { PersonFour, PersonOne, PersonThree, PersonTwo } from "../assets";

const BeginnerFriend = () => {
  return (
    <section className="pt-20">
      <div className="px-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 mx-auto">
        <h1 className="text-gray-900 text-[32px] leading-9 font-semibold">
          Beginer Friends
        </h1>
        <p className="mb-2 text-text">
          Kesempatan belajar bersama orang orang yang berpengalaman di bidang
          ini
        </p>

        <div className="p-2">
          <div className="flex space-x-2">
            <Card img={PersonOne} />
            <Card img={PersonTwo} />
            <Card img={PersonThree} />
            <Card img={PersonFour} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeginnerFriend;
