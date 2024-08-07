import { IconArrowDown, IconCaretDownFilled } from "@tabler/icons-react";
import React from "react";

type Props = { statisticResult: any };

const HomeInfo = ({ statisticResult }: Props) => {
  return (
    <div className="py-10 bg-gradient-to-bl from-slate-600 to-slate-700 relative mx-2 rounded-md">
      <article className="flex justify-center items-center ">
        <div className="absolute -top-8 bg-white w-16 h-16  rounded-full flex items-center justify-center cursor-pointer">
          <IconCaretDownFilled className="text-slate-700 animate-bounce mt-4" />
        </div>
      </article>
      <div className="container px-3 lg:px-0  mx-auto grid grid-cols-12 gap-3 lg:p-5 items-stretch mt-6  ">
        {data.map((item, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration={`${500 * (i + 1)}`}
              key={i}
              className="col-span-6 md:col-span-6 lg:col-span-3"
            >
              <div
                className={`bg-slate-600 border border-dashed  p-4 lg:p-6 xl:p-8 rounded-xl relative z-10 hover:scale-[1.03]  duration-300`}
              >
                <p className="text-2xl lg:text-3xl xl:text-4xl text-white font-bold ">
                  {item.title}
                </p>
                <p className="text-gray-200 mt-2 text-sm">{item.content}</p>
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
