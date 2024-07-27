import React from "react";
import { SubjectData, SubjectDataType } from "@/data/SubjectData";
import HomeSubjectCard from "./HomeSubjectCard";
import PageTitle from "@/Components/PageTitle/PageTitle";
import useSWR from "swr";

type Props = {
  subject: any;
};

const HomeSubjectList = ({ subject, }: Props) => {
  return (
    <div className="p-3 py-10">
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
  );
};

export default HomeSubjectList;
