import React from "react";
import HomeSubjectCard from "./HomeSubjectCard";
import PageTitle from "@/Components/PageTitle/PageTitle";

type Props = {
  subject: any;
};

const HomeSubjectList = ({ subject }: Props) => {
  return (
    <section id="subjects" className="relative overflow-hidden ">
      <div className="p-3 lg:p-0 py-20 z-10 relative backdrop-blur-md">
        <div className=" mx-auto   flex flex-col  items-center">
          <PageTitle
            title="Iqtisoslik Fanlari 📚"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
        <div className=" mt-10 container mx-auto grid grid-cols-1 pb-10 lg:gap-10 items-center ">
          <div className="  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   gap-5">
            {subject?.map(
              (
                item: { id: any; title?: string; des?: string; img?: any },
                i: any
              ) => {
                return <HomeSubjectCard item={item} key={i} i={i} />;
              }
            )}
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
