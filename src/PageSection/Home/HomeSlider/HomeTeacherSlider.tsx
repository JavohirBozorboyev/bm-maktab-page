"use client";
import React, { useState } from "react";
import HomeTeacherSliderCard from "./HomeTeacherSliderCard";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PageTitle from "@/Components/PageTitle/PageTitle";
import { IconArrowRight } from "@tabler/icons-react";

type Props = {
  data: {
    name: string;
    subject: string;
    img: string;
  }[];
};

const HomeTeacherSlider = ({ data }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 20 },
      },
      "(min-width: 1400px)": {
        slides: { perView: 5, spacing: 20 },
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
    <div className=" relative py-20">
      <div className="container mx-auto p-4 md:p-0 py-4  flex flex-col items-center ">
        <PageTitle
          title={"Bizning Ustozlar"}
          info={"Dream Team"}
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, iure? consectetur adipisicing elit. Illo, iure?"
        />

        <div ref={sliderRef} className="keen-slider  mt-4  relative">
          {data.map((item, i) => {
            return <HomeTeacherSliderCard key={i} data={item} />;
          })}

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

        <div className="mt-20  w-full flex justify-center">
          <Link
            href={"/teachers"}
            className="border border-dashed p-3 rounded-xl px-8 flex  items-center gap-2 hover:border-slate-700  text-gray-400  uppercase hover:text-slate-700 active:scale-95 duration-300 "
          >
            Batafsil Malumtolar
            <IconArrowRight className="animate-pulse" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeTeacherSlider;

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
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
