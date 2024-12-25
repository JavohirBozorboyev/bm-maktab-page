import React from "react";
import HomeSubjectCard from "./HomeSubjectCard";
import PageTitle from "@/Components/PageTitle/PageTitle";

type Props = {
  subject: any;
};

type SubjectProps = {
  item: {
    name: string;
    about: string;
  };
  index: number;
};

const HomeSubjectList = ({ subject }: Props) => {

  return (
    <section id="subjects" className="relative overflow-hidden  ">
      <div className="p-3  py-16   z-10 relative backdrop-blur-md">
        <div className=" mx-auto   flex flex-col  items-center">
          <PageTitle
            title="Iqtisoslik Fanlari 📚"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
        <div className=" mt-10 container py-16 mx-auto grid grid-cols-12  pb-10 lg:gap-10 items-center ">
          <div className="col-span-12 md:col-span-6 ">
            <article className="grid grid-cols-2 place-content-center  gap-5">
              {subject
                ?.map((item: any, index: number) => ({
                  item,
                  index,
                }))
                .map(({ item, index }: SubjectProps) => {
                  return (
                    <article
                      key={index}
                      className=" p-5 bg-slate-100 outline-1 outline-dashed outline-offset-1 outline-gray-200 rounded-md select-none active:scale-[0.98] transform transition-all duration-300 ease-in-out cursor-pointer min-h-40 flex  justify-center items-center flex-col gap-2"
                    >
                      <span className="bg-slate-700 w-10 h-10 text-white text-lg rounded-full flex items-center justify-center">
                        {item?.name.slice(0, 1).toUpperCase()}
                      </span>
                      <h1 className="text-xl lg:text-2xl text-slate-700 uppercase">
                        {item?.name}
                      </h1>
                    </article>
                  );
                })}
            </article>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center relative">
            <img
              src={subject[4].photo}
              alt=""
              className="w-[500px] h-[500px]  object-cover rounded-lg z-10"
            />
            <div className="absolute bg-gradient-to-tr from-slate-700 to-slate-500 w-[500px] h-[500px] z-0 scale-105 rounded-lg rotate-6"></div>
          </div>
        </div>
      </div>
      <article
        data-aos="fade-down-left"
        data-aos-duration={`3000`}
        className="absolute text-[16rem] lg:text-[20rem] -top-20   right-0 z-0 text-gray-300"
      >
        01
      </article>

      <article className="absolute left-[-60%] lg:left-[-20%] top-10 w-96 h-96 bg-gradient-to-tr from-blue-200 to-teal-200 opacity-30 rounded-full animate-pulse"></article>
    </section>
  );
};

export default HomeSubjectList;
