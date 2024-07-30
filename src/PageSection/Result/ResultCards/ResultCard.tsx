/* eslint-disable @next/next/no-img-element */
import {
  IconArrowRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type Props = {
  item: any;
};

const ResultCard = ({ item }: Props) => {
  return (
    <div className="border border-dashed w-full min-h-40 p-2 lg:p-3 rounded-xl hover:border-yellow-600 duration-300 cardAnim grid grid-cols-12 gap-2 xl:gap-3 overflow-hidden">
      <div className="col-span-12 xl:col-span-6 relative">
        <img
          src={item.photo}
          alt={`${item.full_name}`}
          className="rounded-lg w-full h-56 object-cover"
        />
        <p className="absolute -top-1 -left-1 backdrop-blur-xl p-1 px-2 rounded-md text-xs text-white uppercase ">
          English
        </p>
      </div>
      <div className="col-span-12 xl:col-span-6 flex flex-col justify-between gap-2">
        <h1 className="text-xl lg:text-2xl text-slate-700">{item.full_name}</h1>
        <p className="text-sm  text-gray-400 line-clamp-5 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          tempore minima provident officiis tempora molestias magni, numquam
          fugiat iure ad eveniet ipsa asperiores quos laborum facilis
          voluptates, vel animi reprehenderit!
        </p>

        <div className="flex gap-1 items-end justify-between mt-2 xl:mt-0">
          <article className="flex items-center gap-1">
            <div className="bg-gradient-to-br from-slate-500 to-slate-700 p-3 rounded-xl relative hover:scale-[0.98] duration-200 ">
              <p className="text-base font-bold text-white">8.0</p>
              <p className="text-gray-100 mt-2 text-xs ">EILTS Score</p>
              <p className="absolute w-2 h-2 top-4 right-4 bg-white rounded-full"></p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-xl relative hover:scale-[0.98] duration-200 ">
              <p className="text-base font-bold text-white">C1</p>
              <p className="text-gray-100 mt-2  text-xs ">CEFR level</p>
              <p className="absolute w-2 h-2 top-4 right-4 bg-white rounded-full"></p>
            </div>
          </article>
          <Link
            href={"/"}
            className="border border-dashed p-2 px-3 uppercase text-xs    flex gap-2 items-center rounded-md text-slate-700 hover:text-yellow-600 hover:border-yellow-600 duration-300 "
          >
            {`Batafsil`}
            <IconArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
