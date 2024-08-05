import React from "react";

type Props = {};

const ResultPageHeroSection = (props: Props) => {
  return (
    <section>
      <div
        style={{
          background: `linear-gradient(0deg, rgba(238,238,238,0.8799894957983193) 36%, rgba(255,255,255,0.8127626050420168) 100%),
          url("https://vita-property.ru/wp-content/uploads/8/4/9/849298040f69704ef60e4dff2a58ab58.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`bg-gradient-to-r  from-slate-200 to-gray-100 min-h-[500px] 2xl:min-h-[700px] flex mt-16   `}
      >
        <div className="container mx-auto p-3 md:p-0 flex flex-col items-center justify-center ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl  text-slate-700 ">
            {` O'quvchilar Natijalari`}
          </h1>
          <p className="text-sm md:text-base  text-gray-800 w-full md:w-[500px] lg:w-[600px] text-center mt-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            debitis ullam quidem magnam quia amet laborum, nulla labore aut
            nesciunt dolor natus omnis inventore tempora. Itaque velit officiis
            recusandae veritatis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultPageHeroSection;
