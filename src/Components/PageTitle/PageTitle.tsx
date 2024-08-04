import React from "react";

type Props = {
  title?: string;
  info?: string;
  content?: string;
};

const PageTitle = ({ title, info, content }: Props) => {
  return (
    <div className="py-8 grid grid-cols-1 text-center gap-5 max-w-2xl">
      {info && (
        <p className="text-sm font-bold  text-gray-400 uppercase">{info}</p>
      )}
      {title && (
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-extrabold uppercase text-slate-700">
          {title}
        </h1>
      )}
      {content && (
        <p className="text-gray-400 text-center text-sm md:text-base">
          {content}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
