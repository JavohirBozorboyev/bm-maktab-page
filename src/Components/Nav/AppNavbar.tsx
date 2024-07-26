import React from "react";

import Link from "next/link";
import { AppNavData } from "@/data/AppNavData";

import BmLogo from "@/assets/BmLogo";
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import { IconChevronDown } from "@tabler/icons-react";

type Props = {};

const AppNavbar = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const OpenNavbar = () => {
    setOpen(!open);
  };

  return (
    <div className=" bg-white  backdrop-blur-lg  fixed top-0 w-full border-b border-dashed  z-[1000] ">
      <div className="container px-4 mx-auto py-3 md:py-2 grid grid-cols-12 md:px-0 ">
        <div className=" flex items-center col-span-12 lg:col-span-3 justify-between  ">
          <div className="flex items-center gap-2">
            <Link href={"/"} className="flex items-center gap-2">
              <BmLogo width={40} height={40} class="w-10 h-10" />
              <h1 className="text-2xl uppercase  text-slate-700 ">Bm-Maktab</h1>
            </Link>
          </div>
          <MenuIcon onClick={OpenNavbar} open={open} />
        </div>
        <div className="col-span-6 hidden lg:flex justify-evenly gap-2 relative ">
          {AppNavData.map((item) => {
            return (
              <NavLink
                key={item.path}
                link={item}
                className="flex items-center p-3 "
              />
            );
          })}
        </div>
        <div className="hidden col-span-12 md:col-span-3 lg:flex justify-end  items-center ">
          <a
            href={"tel:+998907522500"}
            className={`
              flex items-center gap-2 text-base  p-2 px-4 rounded-full text-slate-700 border border-dashed  fill-slate-700 uppercase hover:text-yellow-500 hover:fill-yellow-500 duration-300
              `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-4 h-4 "
            >
              <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
            </svg>

            <p>+998 90 752 25 00</p>
          </a>
        </div>
      </div>

      <div
        className={`fixed bg-white w-full h-screen p-4 pb-20 ${
          open ? "flex" : "hidden"
        }  flex-col gap-2 justify-between lg:hidden`}
      >
        <div className="container mx-auto flex flex-col gap-2 ">
          {AppNavData.map((link, id) => {
            return !link.sub ? (
              <Link
                onClick={OpenNavbar}
                key={id}
                href={link.path}
                className={`cursor-pointer text-lg hover:bg-gray-100 p-2 rounded-sm text-slate-700 ${
                  router.asPath == link.path && "text-yellow-600"
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <details
                key={id}
                className="hover:bg-gray-100 active:bg-gray-100 rounded-sm"
              >
                <summary className="cursor-pointer text-lg   p-2 rounded-sm text-slate-700">
                  {link.name}
                </summary>
                <div className="flex flex-col gap-2 pl-8 py-2">
                  {link.sub?.map((item, i) => {
                    return (
                      <Link
                        onClick={OpenNavbar}
                        key={i}
                        href={item.path}
                        className={`cursor-pointer  hover:bg-white p-2 rounded-sm text-slate-700 ${
                          router.asPath == item.path && "text-yellow-600"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>
        <div>
          <a
            href={"tel:+998907522500"}
            className={`
              flex items-center justify-center gap-2 text-base  p-4 px-4 rounded-xl  text-slate-700 bg-gray-100 fill-slate-700 uppercase hover:text-yellow-500 hover:fill-yellow-500 duration-300
              `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-4 h-4 "
            >
              <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
            </svg>

            <p>+998 90 752 25 00</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;

export const MenuIcon = ({
  onClick,
  open,
}: {
  onClick: () => void;
  open: boolean;
}) => {
  return (
    <>
      {open ? (
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          className="w-8 h-8 fill-gray-400 lg:hidden"
          width={24}
          height={24}
          onClick={onClick}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
        </svg>
      ) : (
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          className="w-8 h-8 fill-gray-400 lg:hidden"
          width={24}
          height={24}
          onClick={onClick}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
            fillRule="nonzero"
          />
        </svg>
      )}
    </>
  );
};
