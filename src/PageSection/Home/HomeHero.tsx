import React from "react";

import BmLogo from "@/assets/BmLogo";
import Link from "next/link";
import AnimatedShinyText from "@/Components/magicui/animated-shiny-text";
import { IconArrowRight, IconBrandInstagram } from "@tabler/icons-react";
import { cn } from "@/Components/util/utils";

type Props = {};

const HomeHero = (props: Props) => {
  return (
    <div className="p-3 md:p-0 container  mx-auto ">
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
            <div className="z-10 flex  items-center justify-center">
              <Link
                href={"https://www.instagram.com/boborahim_mashrab_maktabi/"}
                target="_blank"
                className={cn(
                  "group rounded-lg bg-gradient-to-tr  from-slate-200 to-gray-200 active:scale-[.98]  text-base text-white transition-all ease-in hover:cursor-pointer "
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center p-2 pr-3 transition ease-out hover:text-slate-600 hover:duration-300 hover:dark:text-slate-400">
                  <span className="flex gap-2 items-center font-medium  ">
                    {" "}
                    <IconBrandInstagram className="w-8 h-8 " />{" "}
                    boborahim_mashrab_maktabi
                  </span>
                </AnimatedShinyText>
              </Link>
            </div>
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
