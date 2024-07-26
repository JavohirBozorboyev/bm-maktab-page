/* eslint-disable @next/next/no-img-element */
import PageTitle from "@/Components/PageTitle/PageTitle";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import HomeResultCrad from "./HomeResultCrad";

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
        slides: { perView: 1.1, spacing: 10, origin: "center" },
      },
      "(min-width: 640px)": {
        slides: { perView: 1.2, spacing: 10, origin: "center" },
      },
      "(min-width: 768px)": {
        slides: { perView: 1.4, spacing: 10, origin: "center" },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1.4, spacing: 10, origin: "center" },
      },
      "(min-width: 1280px)": {
        slides: { perView: 1.4, spacing: 10, origin: "center" },
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
    <div className="py-10 ">
      <div className="mx-auto">
        <div className=" mx-auto   flex flex-col  items-center">
          <PageTitle
            info="Best Students"
            title="Natijalar"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit accusantium exercitationem illum non voluptate quos veniam qui perferendis. "
          />
        </div>

        <div className=" mx-auto   px-4">
          <div ref={sliderRef} className="keen-slider  ">
            {data.map((item, index) => {
              return <HomeResultCrad key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
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
