/* eslint-disable @next/next/no-img-element */
import PageTitle from "@/Components/PageTitle/PageTitle";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import HomeResultCrad from "./HomeResultCrad";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  data: {
    name: string;
    subject: string;
    img: string;
    rating: number;
    content: string;
  }[];
};

const HomeResultSection = ({ data }: Props) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",

    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1.2, spacing: 10, origin: "center" },
      },
      "(min-width: 640px)": {
        slides: { perView: 1.2, spacing: 10, origin: "center" },
      },
      "(min-width: 768px)": {
        slides: { perView: 1.3, spacing: 10, origin: "center" },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1.4, spacing: 10, origin: "center" },
      },
      "(min-width: 1280px)": {
        slides: { perView: 1.5, spacing: 10, origin: "center" },
      },
      "(min-width: 1480px)": {
        slides: { perView: 1.6, spacing: 10, origin: "center" },
      },
      "(min-width: 1780px)": {
        slides: { perView: 1.8, spacing: 10, origin: "center" },
      },
      "(min-width: 2000px)": {
        slides: { perView: 2, spacing: 10, origin: "center" },
      },
      "(min-width: 2200px)": {
        slides: { perView: 2.2, spacing: 10, origin: "center" },
      },
    },
  });

  return (
    <section className="relative overflow-hidden bg-gray-50/50">
      <div className="py-10 backdrop-blur-md z-10 relative " id="results">
        <div className="mx-auto">
          <div className=" mx-auto   flex flex-col  items-center">
            <PageTitle
              info="04"
              title="🏆 Natijalar"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit accusantium exercitationem illum non voluptate quos veniam qui perferendis. "
            />
          </div>

          <div className=" mx-auto">
            <div ref={sliderRef} className="keen-slider  ">
              {data.map((item, index) => {
                return <HomeResultCrad key={index} data={item} />;
              })}
            </div>
          </div>

          <div className="mt-20 mb-10 w-full flex justify-center">
            <Link
              data-aos="fade-up"
              data-aos-duration={`1000`}
              href={"/results"}
              className="border border-dashed p-3 rounded-xl px-8 flex  items-center gap-2 hover:border-slate-700  text-gray-400  uppercase hover:text-slate-700 active:scale-95 duration-300 "
            >
              Barcha natijalar
              <IconArrowRight className="animate-pulse" />
            </Link>
          </div>
        </div>
      </div>
      <article
        data-aos="fade-down-right"
        data-aos-duration={`3000`}
        className="absolute text-[16rem] lg:text-[20rem] -top-20 left-0 z-0 text-gray-300"
      >
        04
      </article>
      <article className="absolute right-[-60%] lg:right-[-20%] bottom-10 w-96 h-96 bg-gradient-to-tr from-blue-200 to-teal-200 opacity-30 rounded-full animate-pulse"></article>
    </section>
  );
};

export default HomeResultSection;

export function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow mt-5  -ml-6 -mr-6 ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
