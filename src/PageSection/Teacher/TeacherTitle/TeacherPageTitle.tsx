import React from "react";

type Props = {
  title?: string;
};

const TeacherPageTitle = ({ title }: Props) => {
  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-yellow-500 text-2xl font-mono">{title}</h1>
      </div>
    </div>
  );
};

export default TeacherPageTitle;
