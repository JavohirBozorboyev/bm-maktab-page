/* eslint-disable @next/next/no-img-element */
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type Props = {
  item: any;
};

const TeacherCard = ({ item }: Props) => {
  return (
    <div className="bg-gray-100 w-full min-h-40 p-4 rounded-xl hover:scale-[1.02] duration-300 cardAnim">
      <img
        src={item.photo}
        alt=""
        className="rounded-lg w-full h-72 object-cover"
      />
      <div className="flex flex-col gap-4 py-4">
        <h2 className="text-xl text-yellow-600">{item.full_name}</h2>
        <div className="grid grid-cols-2 gap-2 ">
          <div className="flex items-center gap-2  bg-slate-200 p-2 px-3 rounded-md">
            <p className="text-gray-400 text-sm">Fan:</p>
            <p className="text-slate-700">{item.position}</p>
          </div>
          <div className="flex items-center gap-2  bg-slate-200 p-2 px-3 rounded-md">
            <p className="text-gray-400 text-sm">Malumoti:</p>
            <p className="text-slate-700">Oliy</p>
          </div>
          <div className="flex items-center gap-2  bg-slate-200 p-2 px-3 rounded-md">
            <p className="text-gray-400 text-sm">Tajriba:</p>
            <p className="text-slate-700">{item.experience}</p>
          </div>
          <div className="flex items-center gap-2  bg-slate-200 p-2 px-3 rounded-md">
            <p className="text-gray-400 text-sm">Sertifikat:</p>
            <p className="text-slate-700">IELTS 8.0</p>
          </div>
        </div>
        <div>
          <p className="text-gray-500 mb-1 text-sm">Qisqacha malumot:</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolorum asperiores similique, doloribus recusandae fugit autem enim
            voluptatem adipisci aut quod ducimus
          </p>
        </div>
        {/* <div>
          <Link href={""} className="text-yellow-600 flex items-center gap-2">
            <p>{"To'liq ma'lumot"}</p>{" "}
            <IconArrowRight className="mt-[2px]" size={18} />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default TeacherCard;
