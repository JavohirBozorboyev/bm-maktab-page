import Image from "next/image";
import { Inter } from "next/font/google";
import HomeHero from "@/PageSection/Home/HomeHero";
import HomeResultSection from "@/PageSection/Home/HomeResult/HomeResultSection";
import HomeTeacherSlider from "@/PageSection/Home/HomeSlider/HomeTeacherSlider";
import HomeTDB from "@/PageSection/Home/HomeTDB/HomeTDB";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeResultSection data={StudentResult} />
      {/* Teacher Silider */}

      <HomeTeacherSlider data={TeacherData} />
      <HomeTDB />
    </main>
  );
}

const TeacherData = [
  {
    name: "John Doe",
    subject: "Web Developer",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/4445366/pub_61f014bd434f7e10a696e187_61f015b588fcae003eb7af32/scale_1200",
  },
  {
    name: "John Doe",
    subject: "Web Developer",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/4445366/pub_61f014bd434f7e10a696e187_61f015b588fcae003eb7af32/scale_1200",
  },
  {
    name: "John Doe",
    subject: "Web Developer",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/4445366/pub_61f014bd434f7e10a696e187_61f015b588fcae003eb7af32/scale_1200",
  },
  {
    name: "John Doe",
    subject: "Web Developer",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/4445366/pub_61f014bd434f7e10a696e187_61f015b588fcae003eb7af32/scale_1200",
  },
  {
    name: "John Doe",
    subject: "Web Developer",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/4445366/pub_61f014bd434f7e10a696e187_61f015b588fcae003eb7af32/scale_1200",
  },
  {
    name: "John Doe",
    subject: "Web Developer",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/4445366/pub_61f014bd434f7e10a696e187_61f015b588fcae003eb7af32/scale_1200",
  },
  {
    name: "John Doe",
    subject: "Web Developer",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/4445366/pub_61f014bd434f7e10a696e187_61f015b588fcae003eb7af32/scale_1200",
  },
  {
    name: "John Doe",
    subject: "Web Developer",
    img: "https://avatars.dzeninfra.ru/get-zen_doc/4445366/pub_61f014bd434f7e10a696e187_61f015b588fcae003eb7af32/scale_1200",
  },
];

const StudentResult = [
  {
    name: "John Doe",
    subject: "Matematika",
    img: "https://www.studentemploymentservices.co.uk/storage/2021/06/student-employment-image.jpg",
    rating: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit accusantium exercitationem illum non voluptate quos veniam qui perferendis.",
    class: 7,
  },
  {
    name: "Alisher Botirov",
    subject: "Ingliz-tili",
    img: "https://blogs.staffs.ac.uk/student-blogs/files/2016/08/iStock_28423686_MEDIUM.jpg",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit accusantium exercitationem illum non voluptate quos veniam qui perferendis.",
    class: 8,
  },
  {
    name: "Shodiya Saidova",
    subject: "Fizika",
    img: "https://spera.io/wp-content/uploads/2018/06/shutterstock_462360148.jpg",
    rating: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit accusantium exercitationem illum non voluptate quos veniam qui perferendis.",
    class: 9,
  },
];