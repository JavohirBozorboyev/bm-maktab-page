import React from "react";
import { SubjectData, SubjectDataType } from "@/data/SubjectData";
import HomeSubjectCard from "./HomeSubjectCard";
import PageTitle from "@/Components/PageTitle/PageTitle";
import useSWR from "swr";
import Image from "next/image";
import rasim from "@/assets/bg.png";
type Props = {
  subject: any;
};

const HomeSubjectList = ({ subject }: Props) => {
  return (
    <section id="subjects" className="relative overflow-hidden">
      <div className="p-3 lg:p-0 py-10 z-10 relative backdrop-blur-md">
        <div className=" mx-auto   flex flex-col  items-center">
          <PageTitle
            info="01"
            title="Iqtisoslik Fanlari 📚"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
        <div className=" container mx-auto grid grid-cols-12 lg:gap-10 items-center ">
          <div className="  col-span-12 lg:col-span-7 mt-10 py-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {subject.map(
              (
                item: { id: any; title?: string; des?: string; img?: any },
                i: any
              ) => {
                return <HomeSubjectCard item={item} key={i} i={i} />;
              }
            )}
          </div>
          <div className=" col-span-12 lg:col-span-5">
            <div className="  grid grid-cols-2 gap-2 lg:gap-4">
              <Image
                src={rasim}
                alt=""
                className="col-span-1 w-full h-56 rounded-[40px] rounded-tl-md object-cover hover:scale-105 duration-300"
              />
              <Image
                src={rasim}
                alt=""
                className="col-span-1 w-full h-56 rounded-[40px] rounded-tr-md object-cover hover:scale-105 duration-300"
              />
              <Image
                src={rasim}
                alt=""
                className="col-span-1 w-full h-56 rounded-[40px] rounded-bl-md object-cover hover:scale-105 duration-300"
              />
              <Image
                src={rasim}
                alt=""
                className="col-span-1 w-full h-56 rounded-[40px] rounded-br-md object-cover hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <article className="absolute text-[16rem] lg:text-[20rem] -top-20   right-0 z-0 text-gray-300">
        01
      </article>
      <div className="flex justify-center">
        <article className="absolute border-[3px] border-yellow-500 w-[700px] mx-auto h-[700px] bottom-[-70%]  rounded-full opacity-50 animate-pulse"></article>
      </div>
      <article className="absolute left-[-60%] lg:left-[-20%] top-10 w-96 h-96 bg-gradient-to-tr from-blue-200 to-teal-200 opacity-30 rounded-full animate-pulse"></article>
    </section>
  );
};

export default HomeSubjectList;
