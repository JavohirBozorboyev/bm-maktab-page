import React from "react";
import TeacherCard from "./TeacherCard";

type Props = {
  filter?: string;
  data: any;
};
const TeacherCardList = ({ filter = "Barcha-fanlar", data }: Props) => {

  return (
    <div className="container px-4 md:px-0 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4  pb-10">
      {data
        .filter((item: { subject: string }) =>
          filter === "Barcha-fanlar" ? true : item.subject === filter
        )
        .map((item: any, i: React.Key | null | undefined) => {
          return <TeacherCard key={i} item={item} />;
        })}
    </div>
  );
};

export default TeacherCardList;
