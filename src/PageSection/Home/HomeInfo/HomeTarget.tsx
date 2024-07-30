import PageTitle from "@/Components/PageTitle/PageTitle";
import React from "react";
import Image from "next/image";
import rasim from "@/assets/bg.png";
import { IconMedal } from "@tabler/icons-react";
type Props = {};

const HomeTarget = (props: Props) => {
  return (
    <div className="">
      <div className=" container mx-auto pb-20">
        <div className="flex justify-center">
          <PageTitle
            title="Nega yoshlar bizni tanlashmoqda?"
            content="Boborahim Mashrab maktabi 2023-yildan buyon yoshlarga ta'lim bermoqda va hozirgacha katta ytuqlarga erishdi."
          />
        </div>
        <div className=" relative min-h-[200vh] mt-10">
          <div className=" w-[40%]  sticky top-28 float-left  ">
            <Image
              src={rasim}
              alt={""}
              className="w-full h-[500px] rounded-xl  object-cover outline-1 outline-dashed outline-offset-4 outline-gray-300"
            />
            <Image
              src={rasim}
              alt={""}
              className="w-56 -top-10 -left-5 -rotate-6 h-56 rounded-xl object-cover absolute hover:scale-105 duration-300 outline-1 outline-dashed outline-offset-4 outline-gray-300"
            />
          </div>
          <div className="col-span-7   w-[58%] top-0 float-right grid grid-cols-1 gap-2 gap-y-4 ">
            {data.map((item, i) => {
              return (
                <div key={i} className=" grid grid-cols-12 gap-4">
                  {i % 2 == 1 && (
                    <div className="col-span-6 flex justify-center items-center">
                      <Image
                        src={rasim}
                        alt={""}
                        className="w-full h-full object-cover rounded-xl outline-1 outline-gray-300 "
                      />
                    </div>
                  )}
                  <div className="col-span-6 border border-dashed p-5 rounded-xl">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-14 h-14 rounded-full flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <h2 className="text-xl lg:text-2xl mt-5">{item.title}</h2>
                    <p className="text-sm text-justify mt-2 text-gray-400">
                      {item.content}
                    </p>
                  </div>
                  {i % 2 == 0 && (
                    <div className="col-span-6 flex justify-center items-center">
                      <Image
                        src={rasim}
                        alt={""}
                        className="w-full h-full object-cover  rounded-xl outline-1 outline-gray-300 "
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTarget;

const data = [
  {
    icon: <IconMedal size={40} />,
    title: "  Haftalik ichki imtixonlar",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nihil minima fuga temporibus voluptas deleniti, ipsam vitae
                  eveniet enim itaque nesciunt,`,
  },
  {
    icon: <IconMedal size={40} />,
    title: "  Haftalik ichki imtixonlar",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nihil minima fuga temporibus voluptas deleniti, ipsam vitae
                  eveniet enim itaque nesciunt, `,
  },
  {
    icon: <IconMedal size={40} />,
    title: "  Haftalik ichki imtixonlar",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nihil minima fuga temporibus voluptas deleniti, ipsam vitae
                  eveniet enim itaque nesciunt, `,
  },
  {
    icon: <IconMedal size={40} />,
    title: "  Haftalik ichki imtixonlar",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nihil minima fuga temporibus voluptas deleniti, ipsam vitae
                  eveniet enim itaque nesciunt,`,
  },
  {
    icon: <IconMedal size={40} />,
    title: "  Haftalik ichki imtixonlar",
    content: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nihil minima fuga temporibus voluptas deleniti, ipsam vitae
                  eveniet enim itaque nesciunt, `,
  },
];
