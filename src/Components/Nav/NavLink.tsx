import React from "react";
import { AppNavDataType } from "@/data/AppNavData";
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";
import { useRouter } from "next/router";

type Props = {
  link: AppNavDataType;
  className?: string;
};

const NavLink = ({ link, className }: Props) => {
  const router = useRouter();
  const LinkComp = () => {
    return (
      <div
        className={`hover:text-yellow-600 duration-300 hover:bg-gray-100 rounded-md text-slate-700 ${className} `}
      >
        {" "}
        <Link
          href={link.path}
          className={`${router.asPath == link.path && "text-yellow-600"}`}
        >
          {link.name}
        </Link>
      </div>
    );
  };
  const LinkSel = () => {
    return (
      <div
        className={` duration-300  text-slate-700 hover:bg-gray-100 rounded-md ${className} navlink `}
      >
        <p
          className={`cursor-pointer  flex items-center justify-between gap-2 w-full ${
            router.asPath.includes(link.path) && "text-yellow-600"
          }`}
        >
          {link.name} <IconChevronDown size={16} />
        </p>

        <div
          className={`bg-white p-2 rounded-md shadow fixed top-[56px] -ml-3 z-50 w-52  flex flex-col gap-1 sel `}
        >
          {link?.sub?.map((item) => {
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`hover:bg-gray-100 rounded-[4px] p-1 px-2 hover:text-yellow-600 duration-200 ${
                  router.asPath == item.path && "bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  };
  return !link.sub ? <LinkComp /> : <LinkSel />;
};

export default NavLink;
