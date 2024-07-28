import React from "react";

type Props = {
  setFilter: (filter: string) => void;
  filter: string;
};

const data = [
  "Barcha-fanlar",
  "Dasturlash",
  "Matematika",
  "Ingliz-tili",
  "Rus-tili",
  "Kimyo",
  "Biologiya",
];

const TeacherPageTitle = ({ setFilter, filter }: Props) => {
  return (
    <div>
      <div className="container mx-auto px-3 md:px-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl  mb-5 text-slate-700">
          Ustozlar
        </h1>
      </div>
      <div className="container px-3 md:px-0 mx-auto flex items-center  gap-3 overflow-x-auto">
        {data.map((item, index) => (
          <div
            onClick={() => setFilter(item)}
            key={index}
            className={`flex flex-col  items-center justify-center gap-3 border border-dashed p-2 px-3 rounded-md text-slate-700 hover:border-yellow-600 hover:text-yellow-600  cursor-pointer active:scale-95 duration-300 select-none ${
              filter === item ? "border-yellow-600 text-yellow-600" : ""
            }`}
          >
            <p className="text-base min-w-28 text-center">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherPageTitle;
