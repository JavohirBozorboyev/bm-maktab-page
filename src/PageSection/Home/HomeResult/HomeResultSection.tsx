"use client";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="py-10 ">
      <div className="mx-auto p-4 md:p-0   max-w-5xl ">
        <div className=" mx-auto   flex flex-col  items-center">
          <PageTitle
            info="Best Students"
            title="Resultats"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit accusantium exercitationem illum non voluptate quos veniam qui perferendis. "
          />
        </div>

        <div className="relative container mx-auto">
          <div ref={sliderRef} className="keen-slider  mt-4">
            {data.map((item, index) => {
              return <HomeResultCrad key={index} data={item} />;
            })}
          </div>

          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
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
