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
    <div className="border border-dashed w-full min-h-40 p-3 lg:p-4 rounded-xl hover:border-yellow-600 duration-300 cardAnim  relative">
      <img
        src={item.photo}
        alt={`${item.full_name}`}
        className="rounded-lg w-full h-72 object-cover"
      />
      <div className="flex flex-col gap-2 py-4">
        <h2 className="text-xl text-yellow-600">
          {item?.last_name} {item?.first_name}
        </h2>
        <div className="grid grid-cols-2 gap-1 ">
          <div className="flex items-center gap-2  border border-dashed p-2 px-3 rounded-md">
            <p className="text-gray-400 text-xs">Fan:</p>
            <p className="text-slate-700 text-sm">{item?.science_name}</p>
          </div>
          <div className="flex items-center gap-2  border border-dashed p-2 px-3 rounded-md">
            <p className="text-gray-400 text-xs">Malumoti:</p>
            <p className="text-slate-700 text-sm">{item?.dagree}</p>
          </div>
          <div className="flex items-center gap-2  border border-dashed p-2 px-3 rounded-md">
            <p className="text-gray-400 text-xs">Tajriba:</p>
            <p className="text-slate-700 text-sm">{item?.experience}</p>
          </div>
          {item?.teacher_certificate.map((cer: any, i: number) => {
            return (
              <div
                key={i}
                className="flex items-center gap-2  border border-dashed p-2 px-3 rounded-md"
              >
                <p className="text-gray-400 text-xs">Sertifikat:</p>
                <p className="text-slate-700 text-sm">{cer.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t border-dashed pt-3 flex flex-col gap-2 absolute top-0 right-3 ">
        <Link
          href={"https://www.instagram.com/"}
          className=" p-1 flex justify-evenly rounded-lg items-center text-white bg-yellow-500 border-red-400  duration-300  active:scale-95"
        >
          <IconBrandInstagram className="w-6 h-6 " />
        </Link>
        <Link
          href={"https://www.instagram.com/"}
          className=" p-1 flex justify-evenly rounded-lg items-center text-white bg-yellow-500 border-red-400  duration-300  active:scale-95"
        >
          <IconBrandFacebook className="w-6 h-6 " />
        </Link>
        <Link
          href={"https://www.instagram.com/"}
          className=" p-1 flex justify-evenly rounded-lg items-center text-white bg-yellow-500 border-red-400  duration-300  active:scale-95"
        >
          <IconBrandTelegram className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default TeacherCard;
