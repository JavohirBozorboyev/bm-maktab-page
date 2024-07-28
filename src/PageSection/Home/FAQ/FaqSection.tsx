import PageTitle from "@/Components/PageTitle/PageTitle";
import React from "react";

const FaqSection = () => {
  return (
    <div className="container mx-auto pb-8">
      <div className="flex justify-center">
        <PageTitle
          title="Faq"
          content={`Sizda tug'ulishi mumkun bo'lgan savollarga javob oling`}
        />
      </div>
      <div className=" max-w-6xl mx-auto  p-3 lg:p-0 rounded-lg">
        {faqData.map((item, i) => {
          return (
            <details
              className="cursor-pointer border-t border-dashed py-4"
              key={i}
            >
              <summary className=" text-slate-700 grid grid-cols-12 items-center  ">
                <p className="col-span-11 text-base sm:text-lg  lg:text-xl xl:text-2xl">{item.title} </p>
                <div className="col-span-1 flex justify-end">
                  <span
                    className={` w-7 h-7 flex items-center justify-center text-white text-base rounded-full  animate-pulse outline-dashed outline-1 outline-offset-2 outline-gray-300 ${item.color}`}
                  >
                    {i + 1}
                  </span>
                </div>
              </summary>
              <p className=" text-sm text-justify lg:text-lg mt-4 text-gray-400">
                {item.content}
              </p>
            </details>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;

const faqData = [
  {
    title: "Qanday maxsus yo'nalishlar tashkil etilgan?",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur mollitia eos doloribus voluptatem aperiam distinctio
            quidem, labore corporis necessitatibus rem. Sunt obcaecati, illo ad
            ab omnis eum voluptates qui animi?`,
    color: "bg-teal-300",
  },
  {
    title: "Maktabga necha yoshdan qabul qilinishi mumkin?",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur mollitia eos doloribus voluptatem aperiam distinctio
            quidem, labore corporis necessitatibus rem. Sunt obcaecati, illo ad
            ab omnis eum voluptates qui animi?`,
    color: "bg-pink-300",
  },
  {
    title:
      "O'quvchilarni kerakli adabiyotlar bilan ta'minlaysizmi yoki alohida sotib olish kerakmi?",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur mollitia eos doloribus voluptatem aperiam distinctio
            quidem, labore corporis necessitatibus rem. Sunt obcaecati, illo ad
            ab omnis eum voluptates qui animi?`,
    color: "bg-emerald-300",
  },
  {
    title: "Bepul xizmatlardan qanday foydalanish mumkin?",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur mollitia eos doloribus voluptatem aperiam distinctio
            quidem, labore corporis necessitatibus rem. Sunt obcaecati, illo ad
            ab omnis eum voluptates qui animi?`,
    color: "bg-amber-300",
  },
];
