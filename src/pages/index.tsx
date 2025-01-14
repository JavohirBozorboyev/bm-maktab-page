import { Inter } from "next/font/google";
import HomeHero from "@/PageSection/Home/HomeHero";
import HomeResultSection from "@/PageSection/Home/HomeResult/HomeResultSection";
import HomeTeacherSlider from "@/PageSection/Home/HomeSlider/HomeTeacherSlider";
import HomeTDB from "@/PageSection/Home/HomeTDB/HomeTDB";
import HomeSubjectList from "@/PageSection/Home/Subjects/HomeSubjectList";
import HomeInfo from "@/PageSection/Home/HomeInfo/HomeInfo";
import BrandMarquee from "@/PageSection/Home/BrandMarquee/BrandMarquee";
import Head from "next/head";
import FaqSection from "@/PageSection/Home/FAQ/FaqSection";
import HomePreorty from "@/PageSection/Home/HomeInfo/HomePreorty";
import WeekExamSection from "@/PageSection/Home/Exam/WeekExamSection";
import Contact from "@/PageSection/Home/Contact";

import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  subject,
  studentResult,
  // teacherResult,
  statisticResult,
  weekExam,
}: any) {
  return (
    <>
      <Head>
        <title>Bm-Maktab</title>
      </Head>

      <main >
        <HomeHero />

        <HomeInfo statisticResult={statisticResult} />
        <HomePreorty />
        <BrandMarquee type={true} />
        <HomeSubjectList subject={subject} />
        <WeekExamSection data={weekExam} />
        <HomeTDB />
        <BrandMarquee type={true} />

        <HomeResultSection data={studentResult} />

        <BrandMarquee type={false} />
        {/*   <HomeTeacherSlider data={teacherResult} />*/}
        {/* <BrandMarquee type={true} /> */}
        <Contact />
        <FaqSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.ApiUrl}/main-website/home-page/sciences/`
  );
  const weekExamRes = await fetch(
    `${process.env.ApiUrl}/main-website/home-page/exams/`
  );
  const student = await fetch(
    `${process.env.ApiUrl}/main-website/home-page/results/`
  );
  // const teacher = await fetch(`${process.env.ApiUrl}/main-website/staff/`);
  const statistic = await fetch(
    `${process.env.ApiUrl}/main-website/home-page/stats/`
  );
  const subject = await res.json();
  const studentResult = await student.json();
  // const teacherResult = await teacher.json();
  const statisticResult = await statistic.json();
  const weekExam = await weekExamRes.json();

  return {
    props: {
      subject,
      studentResult,
      // teacherResult,
      statisticResult,
      weekExam,
    },
    revalidate: 10 * 60,
  };
}
