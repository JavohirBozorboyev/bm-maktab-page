/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import BmLogo from "@/assets/BmLogo";
import { AnimatedBeam } from "@/Components/magicui/AnimatedBeam";
import { cn } from "@/lib/util/utils";
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_#020617] hover:scale-[1.04] duration-300",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function SubjectBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div5Ref2 = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div7Ref2 = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[800px] w-full items-center justify-center overflow-hidden rounded-lg   p-4 "
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-7xl  items-stretch justify-between gap-10 ">
        <div className="flex flex-row items-center justify-between">
          <Circle
            ref={div1Ref}
            className="size-32 p-0 shadow-none border-none relative   "
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="500"
              width="200"
              height="200"
              src="https://img.icons8.com/clouds/100/math-book.png"
              alt="math-book"
            />
          </Circle>
          <Circle
            ref={div8Ref}
            className="size-32 p-0 shadow-none border-none relative   "
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              width="200"
              height="200"
              src="https://img.icons8.com/clouds/100/code.png"
              alt="code"
            />
          </Circle>
          <Circle
            ref={div5Ref}
            className="size-32 p-0 shadow-none border-none relative   "
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              width="200"
              height="200"
              src="https://img.icons8.com/clouds/100/code.png"
              alt="code"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle
            ref={div2Ref}
            className="size-32 p-0 shadow-none border-none relative   "
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="1500"
              width="200"
              height="200"
              src="https://img.icons8.com/clouds/100/great-britain.png"
              alt="great-britain"
            />
          </Circle>
          <Circle ref={div4Ref} className="size-40 p-4 border-0 bg-none ">
            <BmLogo class="w-24 h-24" />
          </Circle>
          <Circle
            ref={div6Ref}
            className="size-32 p-0 shadow-none border-none relative   "
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              width="200"
              height="200"
              src="https://img.icons8.com/clouds/100/russian-federation.png"
              alt="russian-federation"
            />
            {/* <Icons.zapier /> */}
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle
            ref={div3Ref}
            className="size-32 p-0 shadow-none border-none relative   "
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="2500"
              width="200"
              height="200"
              src="https://img.icons8.com/clouds/100/test-tube.png"
              alt="test-tube"
            />
          </Circle>
          <Circle
            ref={div7Ref2}
            className="size-32 p-0 shadow-none border-none relative   "
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="3000"
              height="200"
              width="200"
              src="https://img.icons8.com/clouds/100/grass.png"
              alt="grass"
            />
          </Circle>
          <Circle
            ref={div7Ref}
            className="size-32 p-0 shadow-none border-none relative   "
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="3000"
              height="200"
              width="200"
              src="https://img.icons8.com/clouds/100/grass.png"
              alt="grass"
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      {/*  */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref2}
        toRef={div4Ref}
        curvature={85}
        endYOffset={5}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
        curvature={-85}
        endYOffset={-5}
        reverse
      />
    </div>
  );
}
