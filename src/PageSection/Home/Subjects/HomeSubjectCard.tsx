/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
const HomeSubjectCard = ({ item, i }: { item: any; i: number }) => {
  const color = [
    "text-blue-300",
    "text-green-300",
    "text-yellow-300",
    "text-red-300",
    "text-orange-300",
    "text-teal-300",
    "text-pink-300",
    "text-violet-300",
    "text-purple-300",
  ];

  return (
    <Link
      href={`/subjects/${item.slug}`}
      className={` border  border-gray-100 border-dashed hover:scale-[1.02] duration-300  rounded-xl grid grid-cols-12 gap-2 items-center overflow-hidden relative  p-4 lg:p-6 `}
    >
      <div className="flex flex-col gap-2 col-span-12 ">
        <h1 className="text-2xl text-slate-700  uppercase">{item.name}</h1>
        <p className="text-sm text-gray-400 font-light text-wrap line-clamp-2">
          {item.about}...
        </p>
      </div>
      <article
        className={`absolute  rounded-full ${color[i]} top-5 right-5 animate-pulse `}
      >
        <IconArrowRight />
      </article>
    </Link>
  );
};

export default HomeSubjectCard;
