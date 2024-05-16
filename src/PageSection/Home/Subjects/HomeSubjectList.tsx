import React from "react";
import { SubjectData, SubjectDataType } from "@/data/SubjectData";
import HomeSubjectCard from "./HomeSubjectCard";
import PageTitle from "@/Components/PageTitle/PageTitle";

type Props = {};

const HomeSubjectList = (props: Props) => {
  return (
    <div className="p-3 py-10">
      <div className=" mx-auto   flex flex-col  items-center">
        <PageTitle
          info="Subjects"
          title="Iqtisoslik Fanlari"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit accusantium exercitationem illum non voluptate quos veniam qui perferendis. "
        />
      </div>
      <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {SubjectData.map((item: SubjectDataType) => {
          return <HomeSubjectCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default HomeSubjectList;
