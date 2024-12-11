/* eslint-disable react-hooks/rules-of-hooks */
import TeacherCardList from "@/PageSection/Teacher/TeacherPageCards/TeacherCardList";
import TeacherPageHead from "@/PageSection/Teacher/TeacherPageHead/TeacherPageHead";
import TeacherPageTitle from "@/PageSection/Teacher/TeacherTitle/TeacherPageTitle";
import React from "react";

type Props = {
  teacherResult: any;
};

const index = ({ teacherResult }: Props) => {
  const [filter, setFilter] = React.useState<string>("Barcha-fanlar");

  return (
    <div>
      <TeacherPageHead />
      <div className="py-8">
        <TeacherPageTitle setFilter={setFilter} filter={filter} />
      </div>
      <TeacherCardList filter={filter} data={teacherResult} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const teacher = await fetch(`${process.env.ApiUrl}/main-website/teachers/`);
  const teacherResult = await teacher.json();

  return {
    props: {
      teacherResult,
    },
    revalidate: 10 * 60,
  };
}
