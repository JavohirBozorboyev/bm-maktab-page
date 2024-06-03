/* eslint-disable @next/next/no-img-element */
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type Props = {
  item: {
    id: number;
    name: string;
    subject: string;
    img: string;
    experience: string;
  };
};

const TeacherCard = ({ item }: Props) => {
  return (
    <div className="bg-gray-100 w-full min-h-40 p-4 rounded-xl hover:scale-[1.02] duration-300 cardAnim">
      <img
        src={item.img}
        alt=""
        className="rounded-lg w-full h-72 object-cover"
      />
      <div className="flex flex-col gap-4 py-4">
        <h2 className="text-2xl text-yellow-600">{item.name}</h2>
        <div className="grid grid-cols-2 gap-2 ">
          <div className="flex items-center gap-2  bg-slate-200 p-2 px-3 rounded-md">
            <p className="text-gray-400">Fan:</p>
            <p className="text-slate-700">{item.subject}</p>
          </div>
          <div className="flex items-center gap-2  bg-slate-200 p-2 px-3 rounded-md">
            <p className="text-gray-400">Malumoti:</p>
            <p className="text-slate-700">Oliy</p>
          </div>
          <div className="flex items-center gap-2  bg-slate-200 p-2 px-3 rounded-md">
            <p className="text-gray-400">Tajriba:</p>
            <p className="text-slate-700">{item.experience}</p>
          </div>
          <div className="flex items-center gap-2  bg-slate-200 p-2 px-3 rounded-md">
            <p className="text-gray-400">Sertifikat:</p>
            <p className="text-slate-700">IELTS 8.0</p>
          </div>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Qisqacha malumot:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolorum asperiores similique, doloribus recusandae fugit autem enim
            voluptatem adipisci aut quod ducimus ipsum earum inventore eos
            impedit excepturi doloremque veritatis!
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
