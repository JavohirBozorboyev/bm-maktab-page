/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
const HomeSubjectCard = ({ item, i }: { item: any; i: number }) => {
  const Color = [
    "outline-blue-300 bg-blue-300/50",
    "outline-green-300 bg-green-300/50",
    "outline-yellow-300 bg-yellow-300/50",
    "outline-sky-300 bg-sky-300/50",
    "outline-indigo-300 bg-indigo-300/50",
    "outline-teal-300 bg-teal-300/50",
    "outline-pink-300 bg-pink-300/50",
    "outline-violet-300 bg-violet-300/50",
    "outline-purple-300 bg-purple-300/50",
  ];

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration={`${500 * (i + 1)}`}
      className={` outline-dashed outline-1 outline-gray-300 outline-offset-2 p-4  hover:scale-[1.02] duration-300  rounded-xl  items-center  relative  bg-gray-100   grid grid-cols-12 gap-2`}
    >
      <article className="col-span-7">
        <h1 className="text-2xl text-slate-700  uppercase font-bold">
          {item?.name}
        </h1>
        <p className="text-sm text-slate-600 font-light text-wrap line-clamp-4 mt-2">
          {item?.about}
        </p>
        {/* <span className=" absolute w-4 h-4 bg-white rounded-full top-3 right-3"></span> */}
      </article>
      <article className="col-span-5">
        <img
          className="w-40  h-40 object-cover   rounded-full"
          src={`${process.env.ApiUrl}/${item?.photo}`}
          alt={""}
        />
      </article>
    </div>
  );
};

export default HomeSubjectCard;
