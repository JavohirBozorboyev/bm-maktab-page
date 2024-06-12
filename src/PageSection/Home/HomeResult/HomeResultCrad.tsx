import React from "react";
import Image from "next/image";

type Props = {
  data: any;
};

const HomeResultCrad = ({ data }: Props) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-12 gap-6 bg-gray-100 p-4 rounded-2xl keen-slider__slide">
        <div className="col-span-12 md:col-span-6">
          <Image
            src={data.photo}
            alt={data.full_name}
            width={300}
            height={300}
            className="rounded-xl w-full  h-96  object-cover hover:scale-95 duration-300"
          />
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col justify-evenly pr-2 ">
          <div className="flex gap-4 items-center justify-between">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-slate-700 ">
              {data.full_name}
            </h1>
            <p className="text-slate-700 uppercase  md:text-base text-sm lg:text-xl">{`${
              data.class ? data.class : "5"
            }-sinf`}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h2 className="text-yellow-500 text-base sm:text-lg lg:text-2xl ">
              Matematika
            </h2>
            <p className="text-slate-700  text-base lg:text-lg">{`${data.grade}-O'rin`}</p>
          </div>
          <p className="text-sm lg:text-base text-gray-500 mt-4 text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            sequi, magni, explicabo sapiente placeat nemo aspernatur esse vel ea
            sit quaerat saepe modi repellat ipsa blanditiis deserunt quis
            impedit eveniet.
          </p>

          {/* <div className="grid grid-cols-12 gap-4 mt-4 relative">
            <div className=" flex justify-center bg-white p-4 rounded-xl col-span-4">
             
            </div>
            <div className="col-span-4 bg-white rounded-xl flex justify-center items-center "></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomeResultCrad;
