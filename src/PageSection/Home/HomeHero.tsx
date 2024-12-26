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
    <div className="relative overflow-hidden  ">
      <div className="relative overflow-hidden backdrop-blur-md z-10">
        <div className="container min-h-[80vh]  lg:min-h-[85vh] max-w-7xl  px-3 lg:px-0  mx-auto relative z-10 flex items-center justify-center">
          <div className=" flex flex-col gap-5 items-center justify-center z-10 relative">
            <h2
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-xl lg:text-2xl  text-slate-700 text-center"
            >
              Boborahim Mashrab nomi xususiy maktab
            </h2>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-3xl lg:text-4xl xl:text-5xl my-4  text-slate-700  text-center font-bold "
            >
              Bizni tanlaganlarga va bizga{" "}
              <span className="text-yellow-500">ishonganlar</span> uchun doim
              izlanishdamiz. ✨
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-slate-600   text-sm lg:text-base text-center"
            >
              {`Boborahim Mashrab xususiy maktabi zamonaviy sharoitlar bilan
              ta'minlangan ixtisoslashtirilgan maktab bo'lib, 1-sinfdan
              11-sinfgacha bo'lgan o'quvchilar taxsil oladi. Ixtisoslik
              yo'nalishlari matematika, informatika (I.T), ingliz tili, rus
              tili, kimyo hamda biologiya fanlari bo'lib darslar o'zbek tilida
              olib boriladi`}
            </p>
            <div className="flex gap-5 items-center flex-wrap justify-center mt-10">
              <Link
                data-aos="fade-up"
                data-aos-duration="3000"
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
                data-aos="fade-up"
                data-aos-duration="3000"
                href={"tel:+998907522500"}
                className="bg-gradient-to-tr from-yellow-500 to-yellow-400  p-3 outline-dashed outline-1 outline-offset-2 outline-yellow-400 px-10 rounded-full text-white  flex items-center gap-2 hover:scale-95 duration-300 "
              >
                {`Bog'lanish`} <IconArrowRight size={18} />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className=" flex justify-center mt-10 absolute mx-4 -bottom-[550px] lg:-bottom-[650px] left-0 right-0 z-0"
      >
        <BmLogo class="w-[1200px] h-[1200px] opacity-35 " />
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="  mt-10 absolute top-10 right-10 lg:top-10 lg:right-20 z-0"
      >
        <BmLogo class="w-40 h-40  opacity-50 drop-shadow-xl  " />
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="4000"
        className="  mt-10 absolute -top-[20%] -left-[20%] xl:-left-[30%] 2xl:-left-[20%]  z-0 hidden lg:block"
      >
        <BmLogo class="w-96 h-96 xl:w-[600px] xl:h-[600px]  opacity-15 rotate-45 " />
      </div>
    </div>
  );
};

export default HomeHero;
