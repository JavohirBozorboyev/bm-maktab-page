import { Inter } from "next/font/google";
import HomeHero from "@/PageSection/Home/HomeHero";
import HomeResultSection from "@/PageSection/Home/HomeResult/HomeResultSection";
import HomeTeacherSlider from "@/PageSection/Home/HomeSlider/HomeTeacherSlider";
import HomeTDB from "@/PageSection/Home/HomeTDB/HomeTDB";
import HomeSubjectList from "@/PageSection/Home/Subjects/HomeSubjectList";
import OrbitingCirclesSection from "@/PageSection/Home/OrbitingCirclesSection";
import HomeInfo from "@/PageSection/Home/HomeInfo/HomeInfo";
import BrandMarquee from "@/PageSection/Home/BrandMarquee/BrandMarquee";
import Head from "next/head";
import FaqSection from "@/PageSection/Home/FAQ/FaqSection";
import HomeTarget from "@/PageSection/Home/HomeInfo/HomeTarget";
import HomePreorty from "@/PageSection/Home/HomeInfo/HomePreorty";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ subject, studentResult, teacherResult }: any) {
  return (
    <>
      <Head>
        <title>Bm-Maktab</title>
      </Head>

      <main>
        <HomeHero />
        <HomeInfo />
        <HomePreorty />
        {/* <HomeTarget /> */}
        <BrandMarquee type={true} />
        <HomeSubjectList subject={subject} />
        <BrandMarquee type={false} />
        <HomeResultSection data={studentResult} />

        <BrandMarquee type={true} />
        <HomeTeacherSlider data={teacherResult} />
        <BrandMarquee type={false} />

        <HomeTDB />
        <FaqSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.ApiUrl}/mainapp/course/`);
  const student = await fetch(`${process.env.ApiUrl}/mainapp/top-students/`);
  const teacher = await fetch(`${process.env.ApiUrl}/mainapp/staff/`);
  const subject = await res.json();
  const studentResult = await student.json();
  const teacherResult = await teacher.json();

  return {
    props: {
      subject,
      studentResult,
      teacherResult,
    },
    revalidate: 10 * 60,
  };
}
