/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";

import { AppNavData } from "@/data/AppNavData";
import BmLogo from "@/assets/BmLogo";

const massengerLink = [
  {
    name: "Telefon Raqam",
    path: "/",
  },
  {
    name: "Telegram",
    path: "/",
  },
  {
    name: "Instagram",
    path: "/",
  },
  {
    name: "Facebook",
    path: "/",
  },
];

const developerLink = [
  {
    name: "Frontend",
    path: "/",
  },
  {
    name: "Backend",
    path: "/",
  },
];

type Props = {};

const AppFooter = (props: Props) => {
  return (
    <div className=" bg-slate-800 shadow-inner shadow-white py-14 fixed bottom-0 top-0 w-full -z-10 flex items-end">
      <div className="container p-4  mx-auto  grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 sm:col-span-6 md:col-span-6">
          <BmLogo width={40} height={40} class="w-10 h-10" />
          <p className=" text-sm mt-8 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eos necessitatibus et doloremque beatae laborum aspernatur, Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque
            adipisci nesciunt deleniti! Veritatis, vero culpa sunt ratione
            repellendu.{" "}
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2 flex flex-col ">
          <span className="text-lg  uppercase text-slate-100">Sahifalar</span>
          <div className="mt-5 ml-2 flex flex-col gap-2">
            {AppNavData.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.path}
                  className="text-gray-400 text-sm  py-1 hover:text-yellow-600 duration-300"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2 flex flex-col ">
          <span className="text-lg  uppercase text-slate-100">
            {"  Bog'lanish"}
          </span>
          <div className="mt-5 ml-2 flex flex-col gap-2">
            {massengerLink.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.path}
                  className="text-gray-400 text-sm  py-1 hover:text-yellow-600 duration-300"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2 flex flex-col ">
          <span className="text-lg  uppercase text-slate-100">
            {"Developers"}
          </span>
          <div className="mt-5 ml-2 flex flex-col gap-2">
            {developerLink.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.path}
                  className="text-gray-400 text-sm  py-1 hover:text-yellow-600 duration-300"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
