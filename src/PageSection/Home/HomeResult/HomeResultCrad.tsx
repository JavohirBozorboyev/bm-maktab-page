import React from "react";
import Image from "next/image";

type Props = {
  data: any;
};

const HomeResultCrad = ({ data }: Props) => {

  return (
    <>
      <div className="mt-10 grid grid-cols-12 gap-6 border border-dashed p-4 lg:p-6 rounded-2xl keen-slider__slide backdrop-blur-md ">
        <div className="col-span-12 md:col-span-6">
          <Image
            src={data.photo}
            alt={data.full_name}
            width={300}
            height={300}
            placeholder="blur"
            loading="lazy"
            blurDataURL={data.photo}
            className="rounded-xl w-full  h-52 md:h-96  object-cover hover:grayscale duration-300"
          />
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col justify-between pr-2 ">
          <div>
            <h1 className="  text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 text-wrap">
              {data?.first_name} {data?.last_name}
            </h1>
            <p className="indent-4 text-xs sm:text-sm lg:text-base mt-5 line-clamp-[10] ">
              {data?.about}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-5 mt-5 ">
            <div className="bg-gradient-to-br from-slate-500 to-slate-700 p-5 rounded-xl relative hover:scale-[0.98] duration-200 ">
              <p className="text-xl sm:text-2xl md:text-3xl  xl:text-4xl font-bold text-white">
                8.0
              </p>
              <p className="text-gray-100 mt-2 text-sm lg:text-base">
                Overall EILTS <br /> Score
              </p>
              <p className="absolute w-4 h-4 top-4 right-4 bg-white rounded-full"></p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-5 rounded-xl relative hover:scale-[0.98] duration-200 ">
              <p className="text-xl sm:text-2xl md:text-3xl  xl:text-4xl font-bold text-white">
                C1
              </p>
              <p className="text-gray-100 mt-2  text-sm lg:text-base">
                CEFR level
              </p>
              <p className="absolute w-4 h-4 top-4 right-4 bg-white rounded-full"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeResultCrad;
