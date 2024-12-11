/* eslint-disable @next/next/no-img-element */
import PageTitle from "@/Components/PageTitle/PageTitle";
import React from "react";
import Image from "next/image";
import rasim from "@/assets/bg.png";

type Props = {};

const HomeTDB = (props: Props) => {
  return (
    <div className="relative overflow-hidden" id="monthWinner">
     
      <div className="py-10 backdrop-blur-md relative z-10">
        <div className="container mx-auto p-4 md:p-0  flex flex-col  items-center">
          <PageTitle
            info="03"
            title="Chorak g'oliblari 👩‍🎓👨‍🎓"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit accusantium exercitationem illum non voluptate quos veniam qui perferendis. "
          />

          <div className="grid grid-cols-12 gap-3 mt-10">
            <div className="col-span-12 md:col-span-6">
              <Image
                data-aos="zoom-in"
                data-aos-duration={`500`}
                src={rasim}
                alt=""
                className="rounded-xl w-full h-full   object-cover hover:scale-95 duration-300 "
              />
            </div>
            <div className="col-span-12 md:col-span-6 ">
              <div className="grid grid-cols-2 gap-3">
                <Image
                  data-aos="zoom-in"
                  data-aos-duration={`1000`}
                  src={rasim}
                  alt=""
                  className="rounded-xl w-full  min-h-44  object-cover hover:scale-95 duration-300"
                />
                <Image
                  data-aos="zoom-in"
                  data-aos-duration={`1500`}
                  src={rasim}
                  alt=""
                  className="rounded-xl w-full min-h-44   object-cover hover:scale-95 duration-300"
                />
                <div className="col-span-2">
                  <Image
                    data-aos="zoom-in"
                    data-aos-duration={`2000`}
                    src={rasim}
                    alt=""
                    className="rounded-xl w-full h-64   object-cover hover:scale-95 duration-300 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article
        data-aos="fade-down-left"
        data-aos-duration={`3000`}
        className="absolute text-[16rem] lg:text-[20rem] -top-20 right-0 z-0 text-gray-300"
      >
        03
      </article>
    </div>
  );
};

export default HomeTDB;
