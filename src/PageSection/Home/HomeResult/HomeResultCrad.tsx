/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  data: any;
};

const HomeResultCrad = ({ data }: Props) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-12 gap-6 bg-gray-100 p-4 rounded-2xl keen-slider__slide">
        <div className="col-span-12 md:col-span-6">
          <img
            src={data.img}
            alt=""
            className="rounded-xl w-full  h-full  object-cover hover:scale-95 duration-300"
          />
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col justify-evenly pr-2 ">
          <div className="flex gap-4 items-center justify-between">
            <h1 className="text-3xl text-slate-700 font-mono">{data.name}</h1>
            <p className="text-slate-700 uppercase font-mono text-xl">{`${data.class}-sinf`}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h2 className="text-yellow-500 text-2xl font-mono">
              {data.subject}
            </h2>
            <p className="text-slate-700 font-mono text-xl">{`${data.rating}-O'rin`}</p>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-justify font-mono">
            {data.content}
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
