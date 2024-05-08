import React from "react";

type Props = {
  title?: string;
  info?: string;
  content?: string;
};

const PageTitle = ({ title, info, content }: Props) => {
  return (
    <div className="py-8 flex flex-col justify-center items-center gap-8 max-w-xl">
      {info && (
        <p className="text-sm font-bold  text-gray-400 uppercase">{info}</p>
      )}
      {title && <h1 className="text-3xl font-bold text-slate-700">{title}</h1>}
      {content && <p className="text-gray-400 text-center">{content}</p>}
    </div>
  );
};

export default PageTitle;
