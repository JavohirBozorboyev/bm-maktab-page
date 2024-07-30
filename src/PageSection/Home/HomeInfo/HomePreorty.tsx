/* eslint-disable react/jsx-no-undef */
import React from "react";
import rasim from "@/assets/bg.png";
import PageTitle from "@/Components/PageTitle/PageTitle";
import Image from "next/image";
import { IconHandClick } from "@tabler/icons-react";
import Link from "next/link";
const HomePreorty = () => {
  return (
    <div className="overflow-hidden">
      <div className=" container px-3 lg:px-0 mx-auto pb-20">
        <div className="flex justify-center">
          <PageTitle
            title="Nega yoshlar bizni tanlashmoqda?"
            content="Boborahim Mashrab maktabi 2023-yildan buyon yoshlarga ta'lim bermoqda va hozirgacha katta ytuqlarga erishdi."
          />
        </div>
        <div className=" grid grid-cols-12 items-center gap-5 gap-y-16 xl:gap-10  relative mt-10">
          <div className=" col-span-12 lg:col-span-5 relative">
            <Image
              src={rasim}
              alt={""}
              className="w-full h-80 lg:h-[500px] rounded-xl active:z-20 active:scale-[0.98] relative duration-300  object-cover outline-1 outline-dashed outline-offset-4 outline-gray-300"
            />
            <Image
              src={rasim}
              alt={""}
              className="w-40 h-40 lg:w-56 lg:h-56 -top-5 -left-3 -rotate-6  rounded-xl object-cover absolute hover:scale-105 duration-300 outline-1 outline-dashed outline-offset-4 outline-gray-300"
            />
            <Image
              src={rasim}
              alt={""}
              className="w-40 h-40 lg:w-56 lg:h-56 -bottom-5 -right-3 rotate-6  rounded-xl object-cover absolute hover:scale-105 duration-300 outline-1 outline-dashed outline-offset-4 outline-gray-300"
            />
          </div>
          <div className="col-span-12 lg:col-span-7  grid grid-cols-1 gap-2 ">
            <div className=" grid grid-cols-12 gap-4 lg:gap-10">
              {data.map((item, i) => {
                return (
                  <Link
                    href={item.link}
                    key={i}
                    className=" col-span-12 md:col-span-6 relative"
                  >
                    {" "}
                    <div className=" border border-dashed p-5 lg:p-8 backdrop-blur-sm rounded-xl  hover:backdrop-blur-xl hover:scale-[1.03] duration-300 cursor-pointer select-none active:scale-95">
                      <h2 className=" text-lg xl:text-xl  text-yellow-600">
                        {item.title}
                      </h2>
                      <p className="text-sm text-justify mt-2 text-gray-400">
                        {item.content}
                      </p>
                      <IconHandClick className="absolute right-2 text-gray-300 animate-pulse" />
                    </div>
                    <p className="absolute text-7xl  xl:text-9xl -top-5 -right-2 lg:-top-10 lg:-right-5 font-extrabold -z-10 text-slate-700">
                      0{i + 1}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePreorty;

const data = [
  {
    title: "Iqtisoslik fanlari",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Nihil minima fuga temporibus voluptas deleniti, ipsam vitae
                        eveniet enim itaque nesciunt,`,
    link: "#subjects",
  },

  {
    title: "Haftalik  imtixonlar",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil minima fuga temporibus voluptas deleniti, ipsam vitae
                    eveniet enim itaque nesciunt, `,
    link: "#weekExam",
  },
  {
    title: "Chorak g'oliblari",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil minima fuga temporibus voluptas deleniti, ipsam vitae
                    eveniet enim itaque nesciunt,`,
    link: "#monthWinner",
  },
  {
    title: "Eng yaxshi natijalar",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil minima fuga temporibus voluptas deleniti, ipsam vitae
                    eveniet enim itaque nesciunt, `,
    link: "#results",
  },
];
