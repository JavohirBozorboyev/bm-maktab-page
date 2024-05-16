/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SubjectDataType } from "@/data/SubjectData";
import BmLogo from "@/assets/BmLogo";

const HomeSubjectCard = ({ item }: { item: SubjectDataType }) => {
  return (
    <div
      className={`bg-gradient-to-r hover:scale-[1.02] from-slate-200 to-gray-100 p-3 md:p-5 rounded-xl grid grid-cols-12 items-center overflow-hidden relative subjectCard min-h-40`}
      style={{
        background: `linear-gradient(60deg, rgba(51,65,85,0.7719782913165266) 55%, rgba(234,179,8,0.10688025210084029) 100%), url(${item.img})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-2 col-span-8">
        <h1 className="text-xl md:text-2xl text-white">{item.title}</h1>
        <p className="text-sm text-gray-200">{item.des}</p>
      </div>
      <div className="col-span-4 flex justify-end ">
        <BmLogo class="w-24 h-24" />
      </div>
    </div>
  );
};

export default HomeSubjectCard;
