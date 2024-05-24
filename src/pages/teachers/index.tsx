import TeacherPageHead from "@/PageSection/Teacher/TeacherPageHead/TeacherPageHead";
import TeacherPageTitle from "@/PageSection/Teacher/TeacherTitle/TeacherPageTitle";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <TeacherPageHead />
      <TeacherPageTitle title="Dasturlash" />
    </div>
  );
};

export default index;
