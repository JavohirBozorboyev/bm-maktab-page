import Marquee from "@/Components/magicui/Marquee";
import PageTitle from "@/Components/PageTitle/PageTitle";
import React from "react";
import Image from "next/image";
import rasim from "@/assets/bg.png";
type Props = {};

const WeekExamSection = (props: Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-600">
      <div className=" backdrop-blur-md relative z-10">
        <div className="container mx-auto pt-20 text-center">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-bold  text-gray-200 uppercase">02</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl   font-extrabold uppercase text-white">
              Haftalik Imtixonlar
            </h1>
          </div>
        </div>
        <div className="  py-24">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="w-96">
                <Image
                  src={rasim}
                  alt={""}
                  className="w-full h-56 object-cover rounded-md"
                />
              </div>
            ))}
          </Marquee>
          <Marquee  pauseOnHover className="[--duration:20s]">
            {[1, 2, 3, 4].map((item, i) => (
              <div key={i} className="w-96">
                <Image
                  src={rasim}
                  alt={""}
                  className="w-full h-56 object-cover rounded-md"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <article className="absolute text-[16rem] lg:text-[20rem] -top-20 left-0 z-0 text-gray-400">
        02
      </article>
    </section>
  );
};

export default WeekExamSection;
