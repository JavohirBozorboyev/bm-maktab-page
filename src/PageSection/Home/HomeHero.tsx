import React from "react";

import BmLogo from "@/assets/BmLogo";
import Link from "next/link";
import AnimatedShinyText from "@/Components/magicui/animated-shiny-text";
import { IconArrowRight, IconBrandInstagram } from "@tabler/icons-react";
import { cn } from "@/lib/util/utils";
import Image from "next/image";
import Rasim from "@/assets/bg.png";

type Props = {};

const HomeHero = (props: Props) => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative overflow-hidden backdrop-blur-xl">
        <div className="container px-3 lg:px-0  mx-auto relative z-10 pt-28 pb-10   grid grid-cols-12 gap-y-12 gap-5 items-stretch">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-5 items-start ">
            <h2 className="text-xl uppercase text-slate-600">
              Eng yaxshi imkoniyat
            </h2>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-4  text-slate-700 uppercase ">
              Biz bilan eng <span className="text-yellow-500">Yaxshi</span>{" "}
              natijalarga erish ✨
            </h1>
            <p className="text-gray-400 border-l-2 border-dashed pl-4 border-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vero ducimus ut quaerat, nihil cupiditate corporis nulla ipsum
              consequatur distinctio architecto fugit, sit ab mollitia, quia
              veritatis voluptatum fuga nam!
            </p>
            <div className="flex gap-5 items-center flex-wrap mt-10">
              <Link
                href={"https://www.instagram.com/boborahim_mashrab_maktabi/"}
                target="_blank"
                className={cn(
                  "group rounded-full bg-gradient-to-tr  from-slate-200 to-gray-200  active:scale-[.98]  text-base text-white transition-all ease-in hover:cursor-pointer outline-1 outline-dashed outline-gray-200 outline-offset-2 hover:outline-slate-700 duration-300 "
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center p-2 px-4 transition ease-out hover:text-slate-600 hover:duration-300 hover:dark:text-slate-400">
                  <span className="flex gap-2 items-center font-medium  ">
                    {" "}
                    <IconBrandInstagram className="w-8 h-8 " />{" "}
                    boborahim_mashrab_maktabi
                  </span>
                </AnimatedShinyText>
              </Link>
              <Link
                href={"#contact"}
                className="bg-gradient-to-tr from-yellow-500 to-yellow-400  p-3 outline-dashed outline-1 outline-offset-2 outline-yellow-400 px-10 rounded-full text-white  flex items-center gap-2 hover:scale-95 duration-300 "
              >
                {`Bog'lanish`} <IconArrowRight size={18} />{" "}
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 relative">
            <Image
              src={Rasim}
              alt=""
              className=" w-full h-full rounded-xl outline-1 outline-dashed outline-offset-4 outline-gray-200"
            />

            <span className="backdrop-blur-3xl cursor-pointer absolute -top-2 -left-8 p-2 rounded-full font-light text-yellow-300 outline-dashed outline-1 animate-pulse opacity-70 -rotate-12 outline-yellow-300 px-3 uppercase text-sm">
              # Dasturlash
            </span>
            <span className="backdrop-blur-3xl cursor-pointer absolute -top-5 -right-0 p-2 rounded-full font-light text-yellow-300 outline-dashed outline-1 animate-pulse opacity-70 rotate-6 outline-yellow-300 px-3 uppercase text-sm">
              # Ingliz-tili
            </span>
            <span className="backdrop-blur-3xl cursor-pointer absolute -bottom-0 -left-2 p-2 rounded-full font-light text-yellow-300 outline-dashed outline-1 animate-pulse opacity-70 -rotate-2 outline-yellow-300 px-3 uppercase text-sm">
              # Matematika
            </span>
            <span className="backdrop-blur-3xl cursor-pointer absolute -bottom-5 -right-0 p-2 rounded-full font-light text-yellow-300 outline-dashed outline-1 animate-pulse opacity-70 rotate-45 outline-yellow-300 px-3 uppercase text-sm">
              # Rustili
            </span>
            <span className="backdrop-blur-3xl cursor-pointer absolute bottom-20 lg:bottom-44 -right-0 p-2 rounded-full font-light text-yellow-300 outline-dashed outline-1 animate-pulse opacity-70 -rotate-45 outline-yellow-300 px-3 uppercase text-sm">
              # Kimyo
            </span>
            <span className="backdrop-blur-3xl cursor-pointer absolute -bottom-0 right-32 p-2 rounded-full font-light text-yellow-300 outline-dashed outline-1 animate-pulse opacity-70 rotate-6 outline-yellow-300 px-3 uppercase text-sm">
              # Bialogiya
            </span>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[400px] bg-gradient-to-tr from-slate-300 to-slate-200 absolute top-0 -z-10 rotate-45 rounded-full animate-pulse left-[-15%]"></div>
      <div className="h-[300px] w-[300px] bg-gradient-to-tr from-yellow-200 to-yellow-100 absolute bottom-10 lg:top-10 -z-10 rotate-45 rounded-full animate-pulse right-[-10%] opacity-30"></div>
    </div>
  );
};

export default HomeHero;

<BmLogo class="w-60 h-60    hover:-rotate-12 duration-300 animate-logo" />;
