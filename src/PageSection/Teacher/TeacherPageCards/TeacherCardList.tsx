import React from "react";
import TeacherCard from "./TeacherCard";

const data = [
  {
    id: 1,
    name: "Javohir Bozorborboyev",
    subject: "Dasturlash",
    img: "https://chechnyainfo.com/wp-content/uploads/2023/02/uluchshenie-zhilischnyh-usloviy-dlya-molodyh-uchenyh.jpg",
    experience: "2-yil",
  },
  {
    id: 2,
    name: "Ulugbek Hatamjanov",
    subject: "Dasturlash",
    img: "https://chechnyainfo.com/wp-content/uploads/2023/02/uluchshenie-zhilischnyh-usloviy-dlya-molodyh-uchenyh.jpg",
    experience: "3-yil",
  },
  {
    id: 3,
    name: "Ulugbek Hatamjanov",
    subject: "Matematika",
    img: "https://chechnyainfo.com/wp-content/uploads/2023/02/uluchshenie-zhilischnyh-usloviy-dlya-molodyh-uchenyh.jpg",
    experience: "3-yil",
  },
  {
    id: 4,
    name: "Ulugbek Hatamjanov",
    subject: "Fizika",
    img: "https://chechnyainfo.com/wp-content/uploads/2023/02/uluchshenie-zhilischnyh-usloviy-dlya-molodyh-uchenyh.jpg",
    experience: "3-yil",
  },
  {
    id: 5,
    name: "Ulugbek Hatamjanov",
    subject: "Ingliz-tili",
    img: "https://chechnyainfo.com/wp-content/uploads/2023/02/uluchshenie-zhilischnyh-usloviy-dlya-molodyh-uchenyh.jpg",
    experience: "3-yil",
  },
  {
    id: 6,
    name: "Ulugbek Hatamjanov",
    subject: "Rus-tili",
    img: "https://chechnyainfo.com/wp-content/uploads/2023/02/uluchshenie-zhilischnyh-usloviy-dlya-molodyh-uchenyh.jpg",
    experience: "3-yil",
  },
];
type Props = {
  filter?: string;
};
const TeacherCardList = ({ filter = "Barcha-fanlar" }: Props) => {
  return (
    <div className="container px-4 md:px-0 mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4  pb-10">
      {data
        .filter((item) =>
          filter === "Barcha-fanlar" ? true : item.subject === filter
        )
        .map((item) => {
          return <TeacherCard key={item.id} item={item} />;
        })}
    </div>
  );
};

export default TeacherCardList;
