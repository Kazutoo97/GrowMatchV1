import React from "react";
import Image from "../assets";

const GrowmatchOffline = () => {
  // {
  //   /* <div className="h-1/3 flex ">
  //             <div className="flex h-full w-full space-x-2 ">
  //               <img
  //                 src={KategoriOne}
  //                 alt=""
  //                 className="w-full rounded-md object-cover"
  //               />
  //               <img
  //                 src={KategoriTwo}
  //                 alt=""
  //                 className="w-full rounded-md object-cover"
  //               />
  //               <img
  //                 src={KategoriThree}
  //                 alt=""
  //                 className="w-full rounded-md object-cover"
  //               />
  //               <img
  //                 src={KategoriFour}
  //                 alt=""
  //                 className="w-full rounded-md object-cover"
  //               />
  //             </div>
  //           </div> */
  // }
  return (
    <section className="">
      <div className="x-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 mx-auto">
        <h1 className="text-center font-bold leading-[48px] text-3xl">
          <span className="text-[#4BC287]">Growmatch</span> offline & online
          event
        </h1>
        <p className="text-center text-[#777777] text-base">
          Raih kesempatan berkembang bersama growmatch dengan mengikuti event
          online dan offline secara gratis, kunjungi social media kami untuk
          informasi lengkap.
        </p>

        <div className="pt-9 ">
          <div className="flex flex-col h-[681px] space-y-2">
            <div className="h-2/3 flex space-x-2">
              <div className="w-1/2 flex">
                <img
                  src={Image.PhotoOfflineOne}
                  alt=""
                  className="rounded-lg"
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-2">
                <div className="flex h-full space-x-2">
                  <img
                    src={Image.PhotoOfflineThree}
                    alt=""
                    className="w-full rounded-md object-cover"
                  />
                  <img
                    src={Image.PhotoOfflineFive}
                    alt=""
                    className="w-full rounded-md object-cover"
                  />
                </div>
                <div className="flex h-full space-x-2">
                  <img
                    src={Image.PhotoOfflineFour}
                    alt=""
                    className="w-full rounded-md object-cover"
                  />
                  <img
                    src={Image.PhotoOfflineTwo}
                    alt=""
                    className="w-full rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowmatchOffline;
