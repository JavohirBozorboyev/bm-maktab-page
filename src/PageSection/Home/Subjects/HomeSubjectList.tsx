import React from "react";
import { SubjectData, SubjectDataType } from "@/data/SubjectData";
import HomeSubjectCard from "./HomeSubjectCard";
import PageTitle from "@/Components/PageTitle/PageTitle";
import useSWR from "swr";

type Props = {
  subject: any;
};

const HomeSubjectList = ({ subject }: Props) => {
  return (
    <div className="relative overflow-hidden">
      <div className="p-3 py-10 z-10 relative backdrop-blur-md" id="subjects">
        <div className=" mx-auto   flex flex-col  items-center">
          <PageTitle
            info="Subjects"
            title="Iqtisoslik Fanlari"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
        <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {subject.map(
            (
              item: { id: any; title?: string; des?: string; img?: any },
              i: any
            ) => {
              return <HomeSubjectCard item={item} key={i} i={i} />;
            }
          )}
        </div>
      </div>
      <article className="absolute text-[16rem] lg:text-[20rem] top-0 right-0 z-0 text-gray-400">
        01
      </article>
    </div>
  );
};

export default HomeSubjectList;
