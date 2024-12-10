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
      <div className="relative overflow-hidden backdrop-blur-xl">
        <div className="container 2xl:min-h-[80vh]  pb-10 pt-24 px-3 lg:px-0  mx-auto relative z-10 grid grid-cols-12 gap-y-12 gap-5 items-center">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-5 items-start ">
            <h2
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-xl lg:text-2xl  text-slate-600"
            >
              Boborahim Mashrab nomi xususiy maktab
            </h2>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-3xl lg:text-4xl xl:text-5xl my-4  text-slate-700 uppercase "
            >
              Bizni tanlaganlarga va bizga{" "}
              <span className="text-yellow-500">ishonganlar</span> uchun doim
              izlanishdamiz. ✨
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-gray-400 border-l-2 border-dashed pl-4 border-slate-500 text-sm lg:text-base"
            >
              Boborahim Mashrab xususiy maktabi zamonaviy sharoitlar bilan
              ta'minlangan ixtisoslashtirilgan maktab bo'lib, 1-sinfdan
              11-sinfgacha bo'lgan o'quvchilar taxsil oladi. Ixtisoslik
              yo'nalishlari matematika, informatika (I.T), ingliz tili, rus
              tili, kimyo hamda biologiya fanlari bo'lib darslar o'zbek tilida
              olib boriladi
            </p>
            <div className="flex gap-5 items-center flex-wrap mt-10">
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
          <div className="col-span-12 md:col-span-6 relative grid grid-cols-12 gap-4">
            <Image
              data-aos="fade-up"
              data-aos-duration="500"
              src={Rasim}
              alt=""
              className=" hidden md:block col-span-8 md:col-span-12 lg:col-span-8 w-full h-full rounded-xl object-cover outline-1 outline-dashed outline-offset-4 outline-gray-200"
            />
            <Image
              data-aos="fade-up"
              data-aos-duration="1000"
              src={Rasim}
              alt=""
              className=" hidden lg:block col-span-4 w-full h-full rounded-xl object-cover outline-1 outline-dashed outline-offset-4 outline-gray-200"
            />
            <Image
              data-aos="fade-up"
              data-aos-duration="1500"
              src={Rasim}
              alt=""
              className=" col-span-12 w-full max-h-60 object-cover rounded-xl outline-1 outline-dashed outline-offset-4 outline-gray-200"
            />

            <div
              data-aos-duration="2000"
              data-aos="fade-up-left"
              className="absolute -top-40 -right-10 -z-10 lg:-left-20 lg:-top-10 xl:-left-24"
            >
              <BmLogo class="w-44 h-44  opacity-5  -rotate-12 " />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[400px] bg-gradient-to-tr from-slate-300 to-slate-200 absolute -top-10 -z-10 rotate-45 rounded-full animate-pulse left-[-15%]"></div>
      <div className="h-[300px] w-[300px] bg-gradient-to-tr from-yellow-200 to-yellow-100 absolute bottom-10 lg:top-10 -z-10 rotate-45 rounded-full animate-pulse right-[-10%] opacity-30"></div>
    </div>
  );
};

export default HomeHero;

<BmLogo class="w-60 h-60    hover:-rotate-12 duration-300 animate-logo" />;
