import React from "react";

import BmLogo from "@/assets/BmLogo";
import Link from "next/link";

type Props = {};

const HomeHero = (props: Props) => {
  return (
    <div className="p-3 md:p-0 container  mx-auto">
      <div className=" bg-gradient-to-r from-gray-100 to-slate-200 p-6 md:p-10   mx-auto mt-16 md:mt-20 rounded-xl grid grid-cols-12 gap-5 min-h-[500px] ">
        <div className="  col-span-12 md:col-span-7 flex flex-col gap-8 justify-evenly items-center md:items-start text-center md:text-left ">
          <h2 className="text-xl md:text-2xl text-slate-700   ">
            Biz bilan farzandlariz
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl   text-yellow-500">
            Kelajagini yarating
          </h1>
          <p className="text-base  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            accusantium animi dolore? Ipsum blanditiis, iste excepturi modi
            autem illo!
          </p>

          <div className="flex items-center gap-5">
            <Link
              href={"/"}
              className="flex items-center justify-center gap-2 bg-gray-200 p-1 pr-3  rounded-xl text-yellow-500 fill-yellow-500 hover:fill-yellow-600 duration-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="44"
                height="44"
                viewBox="0 0 64 64"
              >
                <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
              </svg>
              <p className="">boborahim_mashrab_maktabi</p>
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 flex justify-center">
          <BmLogo class="w-80 h-80 md:w96 md:h-96    hover:-rotate-12 duration-300 animate-logo" />
        </div>

        {/* <div className="homeBg absolute w-full h-full rounded-xl top-0 bottom-0"></div> */}
      </div>
    </div>
  );
};

export default HomeHero;
