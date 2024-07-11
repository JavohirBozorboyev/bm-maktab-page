import { Inter } from "next/font/google";
import HomeHero from "@/PageSection/Home/HomeHero";
import HomeResultSection from "@/PageSection/Home/HomeResult/HomeResultSection";
import HomeTeacherSlider from "@/PageSection/Home/HomeSlider/HomeTeacherSlider";
import HomeTDB from "@/PageSection/Home/HomeTDB/HomeTDB";
import HomeSubjectList from "@/PageSection/Home/Subjects/HomeSubjectList";
import useSWR from "swr";
import OrbitingCirclesSection from "@/PageSection/Home/OrbitingCirclesSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ subject, studentResult, teacherResult }: any) {
  return (
    <main>
      <HomeHero />
      {/* <OrbitingCirclesSection /> */}
      <HomeSubjectList subject={subject} />

      <HomeResultSection data={studentResult} />
      {/* Teacher Silider */}

      <HomeTeacherSlider data={teacherResult} />
      <HomeTDB />
    </main>
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
