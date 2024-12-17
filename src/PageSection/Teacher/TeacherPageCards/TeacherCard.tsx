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
    <div className="border border-dashed w-full min-h-40 p-2 rounded-xl hover:border-yellow-600 duration-300 cardAnim  relative group overflow-hidden ">
      <img
        src={item.photo}
        alt={`${item.full_name}`}
        className="rounded-lg w-full h-[500px] object-cover group-hover:scale-[1.03] group-hover:rounded-xl duration-300"
      />

      <div className="flex flex-col gap-2 py-4 absolute    -bottom-80 group-hover:bottom-0  bg-slate-700 left-0 right-0 duration-300 p-3 rounded-xl m-2">
        {" "}
        <h2 className="text-xl text-white">
          {item?.last_name} {item?.first_name}
        </h2>
        <div className="grid grid-cols-2 gap-1 ">
          <div className="flex items-start flex-col gap-1  bg-slate-600 p-1 px-2 rounded-md">
            <p className="text-gray-400 text-xs">Fan:</p>
            <p className="text-gray-100 text-sm">{item?.science_name}</p>
          </div>
          <div className="flex items-start flex-col gap-1 bg-slate-600 p-1 px-2 rounded-md">
            <p className="text-gray-400 text-xs">Malumoti:</p>
            <p className="text-gray-100 text-sm">{item?.dagree}</p>
          </div>
          <div className="flex items-start flex-col gap-1 bg-slate-600 p-1 px-2 rounded-md">
            <p className="text-gray-400 text-xs">Tajriba:</p>
            <p className="text-gray-100 text-sm">{item?.experience}</p>
          </div>
          {item?.teacher_certificate?.map((cer: any, i: number) => {
            return (
              <div
                key={i}
                className="flex items-start flex-col gap-1 bg-slate-600 p-1 px-2 rounded-md"
              >
                <p className="text-gray-400 text-xs">Sertifikat:</p>
                <p className="text-gray-100 text-sm">{cer.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t border-dashed pt-3 flex flex-col gap-2 absolute top-0 right-3 ">
        <Link
          href={"https://www.instagram.com/"}
          className=" p-1 flex justify-evenly rounded-lg items-center text-white bg-slate-700 border-red-400  duration-300  active:scale-95"
        >
          <IconBrandInstagram className="w-6 h-6 " />
        </Link>
        <Link
          href={"https://www.instagram.com/"}
          className=" p-1 flex justify-evenly rounded-lg items-center text-white bg-slate-700 border-red-400  duration-300  active:scale-95"
        >
          <IconBrandFacebook className="w-6 h-6 " />
        </Link>
        <Link
          href={"https://www.instagram.com/"}
          className=" p-1 flex justify-evenly rounded-lg items-center text-white bg-slate-700 border-red-400  duration-300  active:scale-95"
        >
          <IconBrandTelegram className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default TeacherCard;
