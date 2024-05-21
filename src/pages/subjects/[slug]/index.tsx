/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { SubjectData, SubjectDataType } from "@/data/SubjectData";

type Props = {
  path: string;
};

const index = ({ path }: Props) => {
  let data = SubjectData[(path as any) || (1 as any)];
  return (
    <div className="mt-[65px]">
      <div
        style={{
          background: `linear-gradient(0deg, rgba(238,238,238,0.8799894957983193) 36%, rgba(255,255,255,0.8127626050420168) 100%),
          url("${data.img as any}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`bg-gradient-to-r  from-slate-200 to-gray-100 min-h-[500px] 2xl:min-h-[700px] flex   `}
      >
        <div className="container mx-auto p-3 md:p-0 flex flex-col items-center justify-center ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-mono text-slate-800 ">
            {data.title}
          </h1>
          <p className="text-sm md:text-base  text-gray-800 w-full md:w-[500px] text-center mt-6">
            {data.des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;

export const getServerSideProps = ({ query }: { query: any }) => {
  return {
    props: {
      path: query.slug,
    },
  };
};
