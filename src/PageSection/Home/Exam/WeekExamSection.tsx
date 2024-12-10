/* eslint-disable @next/next/no-img-element */
import Marquee from "@/Components/magicui/Marquee";
// import PageTitle from "@/Components/PageTitle/PageTitle";
import React from "react";
import Image from "next/image";
type Props = {
  data: any;
};

const WeekExamSection = ({ data }: Props) => {
  return (
    <section
      id="weekExam"
      className="relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-600"
    >
      <div className=" backdrop-blur-md relative z-10">
        <div className="container mx-auto pt-20 text-center">
          <div className="flex flex-col gap-5">
            <p
              data-aos="fade-up"
              data-aos-duration={`500`}
              className="text-sm font-bold  text-gray-200 uppercase"
            >
              02
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration={`1000`}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl   font-extrabold uppercase text-white"
            >
              📖 Haftalik Imtixonlar
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration={`1500`}
              className="text-gray-300 text-center text-sm md:text-base max-w-4xl mx-auto"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              laborum velit, placeat aliquam accusantium excepturi nesciunt
              expedita doloribus hic nulla incidunt tempore ullam, eius
              praesentium, maxime voluptatem at cupiditate dolorem.
            </p>
          </div>
        </div>
        <div className="  py-20">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {data
              ?.slice(0, data.length / 2)
              .map((item: { photo: any }, i: React.Key | null | undefined) => (
                <div key={i} className="w-96">
                  {/* <Image
                    width={100}
                    height={100}
                    src={`https://bmschool01.pythonanywhere.com/${item?.photo}`}
                    alt={""}
                    className="w-full h-56 object-cover rounded-md"
                    blurDataURL={`https://bmschool01.pythonanywhere.com/${item?.photo}`}
                    loading="lazy"
                    quality={100}
                    placeholder="blur"
                  /> */}
                  <img
                    src={`https://bmschool01.pythonanywhere.com/${item?.photo}`}
                    alt=""
                    className="w-full h-56 object-cover rounded-md"
                  />
                </div>
              ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {data
              ?.slice(data.length / 2, data.length)
              .map((item: { photo: any }, i: React.Key | null | undefined) => (
                <div key={i} className="w-96">
                  {/* <Image
                    width={100}
                    height={100}
                    src={`https://bmschool01.pythonanywhere.com/${item?.photo}`}
                    alt={""}
                    className="w-full h-56 object-cover rounded-md"
                    blurDataURL={`https://bmschool01.pythonanywhere.com/${item?.photo}`}
                    loading="lazy"
                  /> */}
                  <img
                    src={`https://bmschool01.pythonanywhere.com/${item?.photo}`}
                    alt=""
                    className="w-full h-56 object-cover rounded-md"
                  />
                </div>
              ))}
          </Marquee>
        </div>
      </div>
      <article
        data-aos="fade-down-right"
        data-aos-duration={`3000`}
        className="absolute text-[16rem] lg:text-[20rem] -top-20 left-0 z-0 text-slate-500"
      >
        02
      </article>
    </section>
  );
};

export default WeekExamSection;
