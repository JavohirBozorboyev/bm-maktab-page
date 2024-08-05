/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
const HomeSubjectCard = ({ item, i }: { item: any; i: number }) => {
  const Color = [
    "outline-blue-300 bg-blue-300/50",
    "outline-green-300 bg-green-300/50",
    "outline-yellow-300 bg-yellow-300/50",
    "outline-sky-300 bg-sky-300/50",
    "outline-indigo-300 bg-indigo-300/50",
    "outline-teal-300 bg-teal-300/50",
    "outline-pink-300 bg-pink-300/50",
    "outline-violet-300 bg-violet-300/50",
    "outline-purple-300 bg-purple-300/50",
  ];

  return (
    <div
      className={` outline-dashed outline-1 outline-offset-2  hover:scale-[1.02] duration-300  rounded-xl  items-center  relative  p-4  ${Color[i]}`}
    >
      <h1 className="text-2xl text-white  uppercase font-bold">{item.name}</h1>
      <p className="text-sm text-slate-600 font-light text-wrap line-clamp-4 mt-2">
        {item.about}
      </p>
      <span className=" absolute w-4 h-4 bg-white rounded-full top-3 right-3"></span>
    </div>
  );
};

export default HomeSubjectCard;
