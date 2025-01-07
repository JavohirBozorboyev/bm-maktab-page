import React from "react";
import HomeSubjectCard from "./HomeSubjectCard";
import PageTitle from "@/Components/PageTitle/PageTitle";
import SubjectBeam from "./SubjectBeam";
import { MagicCard } from "@/Components/magicui/MagicCard";

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
  console.log(subject);

  return (
    <section id="subjects" className="relative overflow-hidden  ">
      <div className="p-3  py-16   z-10 relative backdrop-blur-md">
        <div className=" mx-auto   flex flex-col  items-center">
          <PageTitle
            title="Iqtisoslik Fanlari 📚"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
        <div className="  container min-h-[80vh] mx-auto grid grid-cols-1   lg:gap-10 items-center ">
          <SubjectBeam />
        </div>
        {/* <div
          className={
            "container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5  p-4 mt-10  "
          }
        >
          {subject.map((item: any, index: number) => {
            return (
              <MagicCard
                key={index}
                className=" p-10 shadow min-h-80 flex items-center justify-center bg-slate-100 "
                gradientColor={"#e2e8f0"}
              >
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/clouds/100/math-book.png"
                  alt="math-book"
                />
                <h1 className="text-slate-800 text-2xl text-center">{item.name}</h1>
              </MagicCard>
            );
          })}
        </div> */}
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
