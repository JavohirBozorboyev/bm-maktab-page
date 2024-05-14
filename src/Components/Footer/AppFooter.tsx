/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";

import { AppNavData } from "@/data/AppNavData";
import BmLogo from "@/assets/BmLogo";

type Props = {};

const AppFooter = (props: Props) => {
  return (
    <div className=" bg-gray-100 shadow-inner shadow-white py-14">
      <div className="container p-4 md:p-0 mx-auto  grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 sm:col-span-6 md:col-span-6">
          <BmLogo width={40} height={40} class="w-10 h-10" />
          <p className="font-mono text-sm mt-8 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eos necessitatibus et doloremque beatae laborum aspernatur,
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-2 flex flex-col ">
          <span className="text-lg font-mono uppercase text-slate-700">
            Sahifalar
          </span>
          <div className="mt-5 ml-2 flex flex-col gap-2">
            {AppNavData.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.path}
                  className="text-gray-400 text-sm font-mono py-1 hover:text-yellow-600 duration-300"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-2 flex flex-col ">
          <span className="text-lg font-mono uppercase text-slate-700">
            {"  Bog'lanish"}
          </span>
          <div className="mt-5 ml-2 flex flex-col gap-2">
            {AppNavData.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.path}
                  className="text-gray-400 text-sm font-mono py-1 hover:text-yellow-600 duration-300"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-2 flex flex-col ">
          <span className="text-lg font-mono uppercase text-slate-700">
            {"Developers"}
          </span>
          <div className="mt-5 ml-2 flex flex-col gap-2">
            {AppNavData.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.path}
                  className="text-gray-400 text-sm font-mono py-1 hover:text-yellow-600 duration-300"
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
