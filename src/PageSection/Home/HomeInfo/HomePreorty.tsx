/* eslint-disable react/jsx-no-undef */
import React from "react";
import rasim from "@/assets/bg.png";
import PageTitle from "@/Components/PageTitle/PageTitle";
import Image from "next/image";
import { IconHandClick } from "@tabler/icons-react";
import Link from "next/link";
const HomePreorty = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="overflow-hidden py-20 backdrop-blur-xl">
        <div className=" container px-3 lg:px-0 mx-auto ">
          <div className="flex justify-center">
            <PageTitle
              title="Nega yoshlar bizni tanlashmoqda?"
              content="Boborahim Mashrab maktabi 2023-yildan buyon yoshlarga ta'lim bermoqda va hozirgacha katta ytuqlarga erishdi."
            />
          </div>
          <div className=" grid grid-cols-12 items-center gap-5 gap-y-16 xl:gap-10  relative mt-10">
            <div className=" col-span-12 lg:col-span-5 relative grid grid-cols-2 gap-2 lg:gap-4">
              <Image
                src={rasim}
                alt=""
                className="col-span-1 w-full h-56 rounded-[40px] rounded-tl-md object-cover hover:scale-105 duration-300"
              />
              <Image
                src={rasim}
                alt=""
                className="col-span-1 w-full h-56 rounded-[40px] rounded-tr-md object-cover hover:scale-105 duration-300"
              />
              <Image
                src={rasim}
                alt=""
                className="col-span-1 w-full h-56 rounded-[40px] rounded-bl-md object-cover hover:scale-105 duration-300"
              />
              <Image
                src={rasim}
                alt=""
                className="col-span-1 w-full h-56 rounded-[40px] rounded-br-md object-cover hover:scale-105 duration-300"
              />
            </div>
            <div className="col-span-12 lg:col-span-7  grid grid-cols-1 gap-2 ">
              <div className=" grid grid-cols-12 gap-4 lg:gap-4">
                {data.map((item, i) => {
                  return (
                    <Link
                      href={item.link}
                      key={i}
                      className=" col-span-12 md:col-span-6 relative"
                    >
                      {" "}
                      <div className=" border border-dashed p-5 lg:p-8 bg-gray-100 rounded-xl  hover:backdrop-blur-xl hover:scale-[1.03] duration-300 cursor-pointer select-none active:scale-95">
                        <span
                          className={`${item.color}  w-12  h-12 p-4 rounded-full flex items-center justify-center text-white text-xl mb-4 font-bold`}
                        >
                          0{i + 1}
                        </span>
                        <h2 className=" text-lg xl:text-xl font-medium  text-yellow-600 uppercase">
                          {item.title}
                        </h2>
                        <p className="text-sm text-justify mt-2 text-gray-400">
                          {item.content}
                        </p>
                        <IconHandClick className="absolute right-2 text-gray-300 animate-pulse" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[400px] bg-gradient-to-tl from-yellow-300 to-indigo-200 absolute -bottom-20 -z-10 rotate-45 rounded-full animate-pulse right-[-15%] opacity-30"></div>
      <div className="h-[400px] w-[400px] bg-gradient-to-tr from-yellow-200 to-blue-100 absolute top-10 lg:top-10 -z-10 rotate-45 rounded-full animate-pulse left-[-15%] opacity-30"></div>
    </div>
  );
};

export default HomePreorty;

const data = [
  {
    title: "Iqtisoslik fanlari",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Nihil minima fuga temporibus voluptas deleniti`,
    link: "#subjects",
    color: "bg-blue-400",
  },

  {
    title: "Haftalik  imtixonlar",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil minima fuga temporibus voluptas deleniti,  `,
    link: "#weekExam",
    color: "bg-pink-400",
  },
  {
    title: "Chorak g'oliblari",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil minima fuga temporibus voluptas deleniti,`,
    link: "#monthWinner",
    color: "bg-red-400",
  },
  {
    title: "Eng yaxshi natijalar",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil minima fuga temporibus voluptas deleniti,`,
    link: "#results",
    color: "bg-slate-400",
  },
];
