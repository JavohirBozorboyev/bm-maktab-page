/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { SubjectDataType } from "@/data/SubjectData";
import BmLogo from "@/assets/BmLogo";
import Link from "next/link";
import Image from "next/image";
const HomeSubjectCard = ({ item }: { item: any }) => {
  return (
    <Link
      href={`/subjects/${item.slug}`}
      className={`bg-gradient-to-r hover:scale-[1.02] from-slate-200 to-gray-100  rounded-xl grid grid-cols-12 gap-2 items-center overflow-hidden relative subjectCard p-4 lg:p-6 `}
    >
      <div className="flex flex-col gap-2 col-span-12 text-center">
        <h1 className="text-xl md:text-2xl text-slate-700">{item.name}</h1>
        <p className="text-sm text-gray-600">{item.about.slice(0, 100)}...</p>
      </div>

      {/* <div className="col-span-4 flex justify-end ">
        <BmLogo class="w-24 h-24" />
      </div> */}
    </Link>
  );
};

export default HomeSubjectCard;
