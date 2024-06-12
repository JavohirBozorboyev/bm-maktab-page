/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { IconBrandInstagram, IconPhotoStar } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  data: any;
};

const HomeTeacherSliderCard = ({ data }: Props) => {
  return (
    <div className=" rounded-2xl  snap-start keen-slider__slide duration-300 flex flex-col justify-center items-center ">
      <div className="">
        <Image
          src={data.photo}
          alt={data.full_name}
          width={300}
          height={300}
          className="w-full h-64  object-cover rounded-xl"
        />
      </div>
      <div className="flex mt-4 flex-col items-center gap-1">
        <h1 className="text-xl md:text-2xl text-slate-700">{data.full_name}</h1>
        <p className="text-gray-400 text-sm md:text-base">{data.position}</p>
      </div>
    </div>
  );
};

export default HomeTeacherSliderCard;
