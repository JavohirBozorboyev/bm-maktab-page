/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

type Props = {
  data: any;
};

const index = ({ data }: Props) => {
  console.log(data);

  return (
    <div className="mt-[65px]">
      <div
        style={{
          background: `linear-gradient(0deg, rgba(238,238,238,0.8799894957983193) 36%, rgba(255,255,255,0.8127626050420168) 100%),
          url("")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`bg-gradient-to-r  from-slate-200 to-gray-100 min-h-[500px] 2xl:min-h-[700px] flex   `}
      >
        <div className="container mx-auto p-3 md:p-0 flex flex-col items-center justify-center ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl  text-slate-800 ">
            Fanlar
          </h1>
          <p className="text-sm md:text-base  text-gray-800 w-full md:w-[500px] text-center mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            exercitationem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;

export const getServerSideProps = async ({ query }: { query: any }) => {
  const res = await fetch(`${process.env.ApiUrl}/mainapp/course/${query}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
