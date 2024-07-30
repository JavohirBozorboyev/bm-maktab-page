import React from "react";

type Props = {};

const HomeInfo = (props: Props) => {
  return (
    <div className="mt-10 py-10">
      <div className="container px-3 lg:px-0  mx-auto grid grid-cols-12 gap-3 lg:p-5 items-stretch  ">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="col-span-6 md:col-span-6 lg:col-span-3"
            >
              <div
                className={`bg-white border border-dashed  p-4 lg:p-6 xl:p-8 rounded-xl relative z-10 hover:scale-[1.03]  duration-300`}
              >
                <p className="text-2xl lg:text-3xl xl:text-4xl text-slate-700 font-bold ">
                  {item.title}
                </p>
                <p className="text-gray-400 mt-2 text-sm">{item.content}</p>
                <span
                  className={`absolute w-4 h-4  ${item.color}  rounded-full top-5 right-5 animate-pulse`}
                ></span>
              </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeInfo;

const data = [
  {
    title: "13+",
    content: "Yillik tajriba va ishonch",
    color: "bg-yellow-200",
    border: "border-yellow-200",
  },
  {
    title: "800+",
    content: "Taxsil olayotgan o'quvchilar",
    color: "bg-green-200",
    border: "border-green-200",
  },
  {
    title: "2+",
    content: "O'zbekiston bo'ylab filiallar soni",
    color: "bg-blue-200",
    border: "border-blue-200",
  },
  {
    title: "80+",
    content: "BM-Maktab xodimlar soni",
    color: "bg-pink-200",
    border: "border-pink-200",
  },
];
