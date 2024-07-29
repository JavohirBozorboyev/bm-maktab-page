/* eslint-disable @next/next/no-img-element */
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type Props = {
  item: any;
};

const TeacherCard = ({ item }: Props) => {
  return (
    <div className="border border-dashed w-full min-h-40 p-3 lg:p-4 rounded-xl hover:border-yellow-600 duration-300 cardAnim ">
      <img
        src={item.photo}
        alt={`${item.full_name}`}
        className="rounded-lg w-full h-72 object-cover"
      />
      <div className="flex flex-col gap-2 py-4">
        <h2 className="text-xl text-yellow-600">{item.full_name}</h2>
        <div className="grid grid-cols-2 gap-1 ">
          <div className="flex items-center gap-2  border border-dashed p-2 px-3 rounded-md">
            <p className="text-gray-400 text-xs">Fan:</p>
            <p className="text-slate-700 text-sm">{item.position}</p>
          </div>
          <div className="flex items-center gap-2  border border-dashed p-2 px-3 rounded-md">
            <p className="text-gray-400 text-xs">Malumoti:</p>
            <p className="text-slate-700 text-sm">Oliy</p>
          </div>
          <div className="flex items-center gap-2  border border-dashed p-2 px-3 rounded-md">
            <p className="text-gray-400 text-xs">Tajriba:</p>
            <p className="text-slate-700 text-sm">+3 yil</p>
          </div>
          <div className="flex items-center gap-2  border border-dashed p-2 px-3 rounded-md">
            <p className="text-gray-400 text-xs">Sertifikat:</p>
            <p className="text-slate-700 text-sm">IELTS 8.0</p>
          </div>
        </div>
      </div>
      <div className="border-t border-dashed pt-3 grid grid-cols-3 gap-1">
        <Link
          href={"https://www.instagram.com/"}
          className="border border-dashed p-1 flex justify-evenly rounded-md items-center text-red-400 border-red-400 hover:border-gray-400 duration-300 hover:text-gray-400 active:scale-95"
        >
          <IconBrandInstagram className="w-6 h-6 " />
          <p className="text-xs uppercase font-semibold">Instagram</p>
        </Link>
        <Link
          href={"https://www.instagram.com/"}
          className="border border-dashed p-1 flex justify-evenly rounded-md items-center text-blue-500 border-blue-500 hover:border-gray-400 duration-300 hover:text-gray-400 active:scale-95"
        >
          <IconBrandFacebook className="w-6 h-6 " />
          <p className="text-xs uppercase font-semibold">Facebook</p>
        </Link>
        <Link
          href={"https://www.instagram.com/"}
          className="border border-dashed p-1 flex justify-evenly rounded-md items-center text-teal-500 border-teal-500 hover:border-gray-400 duration-300 hover:text-gray-400 active:scale-95"
        >
          <IconBrandTelegram className="w-6 h-6" />
          <p className="text-xs uppercase font-semibold">telegram</p>
        </Link>
      </div>
    </div>
  );
};

export default TeacherCard;
