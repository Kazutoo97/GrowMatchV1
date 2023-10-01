import React, { useEffect, useRef, useState } from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { DataCard } from "../data/CardData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularFrined = () => {
  const arrowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0); // State untuk indeks slide saat ini
  const [slideCount, setSlideCount] = useState(0);
  console.log(slideCount);

  useEffect(() => {
    setSlideCount(DataCard.length);
  }, []);

  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    else if (width >= 1024) return 4;
    else if (width >= 768) return 3;
    else if (width >= 480) return 2;
    else return 1;
  };
  const isAtEnd = currentSlide >= slideCount - getSlidesToShow();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="py-20">
      <div className="px-4 py-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 mx-auto h-fit bg-white relative">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-gray-900 text-3xl">Popular Friends</h1>
          <p className="text-base text-gray-500">
            Kesempatan belajar bersama orang orang yang berpengalaman di bidang
            ini
          </p>
        </div>
        <Slider ref={arrowRef} {...settings}>
          {DataCard.map((data) => (
            <div
              key={data.name}
              className="box h-fit relative rounded-[20px] p-[10px] text-center bg-white border border-gray-400"
            >
              <div className="content">
                <div className="image mt-4">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[80px] w-[80px] md:h-[110px] md:w-[110px] lg:h-[80px] lg:w-[80px] xl:h-[9] rounded-full object-cover block mx-auto mb-1"
                  />
                </div>
                <div className="content-profile">
                  <p className="name tracking-[1px] font-bold leading-normal text-lg">
                    {data.name}
                  </p>
                  <p className="job-title text-xs text-gray-400 font-semibold mt-[2px]">
                    {data.position}
                  </p>
                  <p className="job-desc mt-4 text-xs mx-[30px] md:mx-[10px] text-gray-400 md:block">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quia nulla possimus accusantium
                  </p>
                  <p className="job-address mt-3 mb-2 text-gray-600 text-sm font-medium lg:text-sm">
                    Lhokseumawe, Aceh
                  </p>
                </div>
                <div className="icons absolute space-y-3 top-5 right-3 flex flex-col items-center justify-around">
                  <button
                    type="button"
                    className="w-[20px] h-[20px] bg-white rounded-full sm:border-2 sm:hover:bg-teal-500 border-gray-800 flex items-center justify-center"
                  >
                    <BiLogoFacebook className="text-xl text-center sm:hover:text-white" />
                  </button>
                  <button
                    type="button"
                    className="w-[20px] h-[20px] bg-white rounded-full sm:border-2 sm:hover:bg-teal-500 border-gray-800 flex items-center justify-center"
                  >
                    <BiLogoTwitter className="text-xl text-center sm:hover:text-white" />
                  </button>
                  <button
                    type="button"
                    className="w-[20px] h-[20px] bg-white rounded-full sm:border-2 sm:hover:bg-teal-500 border-gray-800 flex items-center justify-center"
                  >
                    <BiLogoLinkedin className="text-lg text-center sm:hover:text-white" />
                  </button>
                  <button
                    type="button"
                    className="w-[20px] h-[20px] bg-white rounded-full sm:border-2 sm:hover:bg-teal-500 border-gray-800 flex items-center justify-center"
                  >
                    <BiLogoInstagram className="text-xl text-center sm:hover:text-white" />
                  </button>
                </div>
                <div className="button mx-4 mt-6 mb-4">
                  <div className="flex justify-around flex-col space-y-2 items-center ">
                    <button
                      type="button"
                      className="w-full py-2 border-2 hover:bg-teal-500 border-black rounded-lg"
                    >
                      Profile
                    </button>
                    <button
                      type="button"
                      className="w-full py-2  bg-teal-500 hover:bg-teal-400/70 rounded-lg border-2 border-black"
                    >
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => arrowRef.current.slickPrev()}
            className={`absolute top-1/2 -left-[1px] -translate-y-1/2 w-[2rem] h-[2rem] bg-teal-500 cursor-pointer text-white rounded-full flex justify-center items-center shadow-lg ${
              currentSlide === 0 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <IoIosArrowBack className="" />
          </button>
          <button
            type="button"
            onClick={() => arrowRef.current.slickNext()}
            className={`absolute top-1/2 -translate-y-1/2 -right-[1px] w-[2rem] h-[2rem] bg-teal-500 cursor-pointer text-white flex justify-center items-center rounded-full shadow-lg ${
              isAtEnd ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <IoIosArrowForward className="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularFrined;
