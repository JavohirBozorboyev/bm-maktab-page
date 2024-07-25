/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { SubjectDataType } from "@/data/SubjectData";
import BmLogo from "@/assets/BmLogo";
import Link from "next/link";
import Image from "next/image";
const HomeSubjectCard = ({ item, i }: { item: any; i: number }) => {
  const color = [
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-red-300",
    "bg-orange-300",
    "bg-teal-300",
    "bg-pink-300",
    "bg-violet-300",
    "bg-purple-300",
  ];

  return (
    <Link
      href={`/subjects/${item.slug}`}
      className={` border border-dashed hover:scale-[1.02] bg-  rounded-xl grid grid-cols-12 gap-2 items-center overflow-hidden relative subjectCard p-4 lg:p-6 `}
    >
      <div className="flex flex-col gap-2 col-span-12 ">
        <h1 className="text-xl md:text-2xl text-slate-700">{item.name}</h1>
        <p className="text-sm text-gray-400 text-wrap line-clamp-3">
          {item.about}...
        </p>
      </div>
      <div
        className={`absolute w-4 h-4 rounded-full ${color[i]} top-5 right-5 animate-pulse`}
      ></div>

      {/* <div className="col-span-4 flex justify-end ">
        <BmLogo class="w-24 h-24" />
      </div> */}
    </Link>
  );
};

export default HomeSubjectCard;
