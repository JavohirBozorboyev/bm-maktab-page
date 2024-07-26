import React from "react";
import Image from "next/image";

type Props = {
  data: any;
};

const HomeResultCrad = ({ data }: Props) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-12 gap-6 border border-dashed p-4 lg:p-6 rounded-2xl keen-slider__slide ">
        <div className="col-span-12 md:col-span-6">
          <Image
            src={data.photo}
            alt={data.full_name}
            width={300}
            height={300}
            className="rounded-xl w-full  h-96  object-cover hover:grayscale duration-300"
          />
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col justify-between pr-2 ">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-slate-700 text-wrap">
              {data.full_name}
            </h1>
            <p className="indent-4 mt-5 line-clamp-[10] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              facere nesciunt rerum perspiciatis esse sit animi, excepturi
              ratione velit dolor labore, reprehenderit quae ullam pariatur
              nihil ad nostrum ipsum sed quam, laudantium est! Cum pariatur
              voluptates sed sint doloremque nemo modi maxime nesciunt
              voluptatem corrupti, a quasi obcaecati labore ea officia voluptate
              itaque harum. Illo corporis quisquam rem suscipit veritatis
              deserunt, eligendi doloremque. Fuga nam vel similique? Ex,
              voluptatum tempora adipisci quaerat aperiam repellendus qui.
              Debitis doloribus,
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-5 mt-5 ">
            <div className="bg-gradient-to-br from-slate-500 to-slate-700 p-5 rounded-xl relative ">
              <p className="text-2xl md:text-3xl  xl:text-4xl font-bold text-white">
                8.0
              </p>
              <p className="text-gray-100 mt-2">
                Overall EILTS <br /> Score
              </p>
              <p className="absolute w-4 h-4 top-4 right-4 bg-white rounded-full"></p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-5 rounded-xl relative ">
              <p className="text-2xl md:text-3xl  xl:text-4xl font-bold text-white">
                C1
              </p>
              <p className="text-gray-100 mt-2">CEFR level</p>
              <p className="absolute w-4 h-4 top-4 right-4 bg-white rounded-full"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeResultCrad;
