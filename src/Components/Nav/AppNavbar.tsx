"use client";
import React from "react";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { AppNavData } from "@/data/AppNavData";
import NextLogo from "@/../public/next.svg";
import { useRouter, usePathname } from "next/navigation";
import BmLogo from "@/assets/BmLogo";

type Props = {};

const AppNavbar = (props: Props) => {
  const path = usePathname();

  return (
    <div className="  backdrop-blur-lg bg-white fixed top-0 w-full border-b z-50 ">
      <div className="container px-4 mx-auto py-4 grid grid-cols-1 md:grid-cols-3 md:px-0 ">
        <div className=" flex items-center justify-between  ">
          <div className="flex items-center gap-2">
            <BmLogo width={40} height={40} />
            <h1 className="text-3xl  text-slate-700 font-mono">Bm-Maktab</h1>
          </div>
          <MenuIcon />
        </div>
        <div className="hidden md:grid grid-cols-6 gap-1 p-1 bg-gradient-to-l from-gray-100 to-slate-100 rounded-full ">
          {AppNavData.map((item, i) => {
            return (
              <Link
                key={i}
                href={item.path}
                className={`text-slate-700 text-base py-1 col-span-2 font-mono flex items-center justify-center rounded-full hover:bg-gray-200 duration-300 ${
                  path === item.path
                    ? "text-white bg-yellow-500 hover:bg-yellow-600"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex justify-end  items-center ">
          <Link
            href={"/"}
            className={`text-slate-700 text-base relative  font-mono  overflow-hidden  bg-gradient-to-r from-slate-200 to-gray-200  flex items-center justify-between rounded-full gap-7 hover:from-yellow-500 hover:to-yellow-500 hover:text-white fill-slate-700 hover:fill-white duration-300
              
              `}
          >
            <div className="p-2 py-3  rounded-full ml-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-4 h-4 "
              >
                <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
              </svg>
            </div>
            <div className="mr-4 ">Contact</div>
            <div className="p-3  rounded-full bg-white absolute bottom-0 ml-8 -mb-4"></div>
            <div className="p-3  rounded-full bg-white absolute top-0 ml-8 -mt-4"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;

export const MenuIcon = () => {
  return (
    <>
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        className="w-8 h-8 fill-gray-400 md:hidden"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
          fillRule="nonzero"
        />
      </svg>
    </>
  );
};
