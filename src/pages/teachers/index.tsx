/* eslint-disable react-hooks/rules-of-hooks */
import TeacherCardList from "@/PageSection/Teacher/TeacherPageCards/TeacherCardList";
import TeacherPageHead from "@/PageSection/Teacher/TeacherPageHead/TeacherPageHead";
import TeacherPageTitle from "@/PageSection/Teacher/TeacherTitle/TeacherPageTitle";
import React from "react";

type Props = {};

const index = (props: Props) => {
  const [filter, setFilter] = React.useState<string>("Barcha-fanlar");
  return (
    <div>
      <TeacherPageHead />
      <div className="py-8">
        <TeacherPageTitle setFilter={setFilter} filter={filter} />
      </div>
      <TeacherCardList filter={filter} />
    </div>
  );
};

export default index;
