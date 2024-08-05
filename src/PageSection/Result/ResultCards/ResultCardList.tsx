import React from "react";
import ResultCard from "./ResultCard";

type Props = {
  filter?: string;
  data: any;
};
const ResultCardList = ({ filter = "Barcha-fanlar", data }: Props) => {
  return (
    <section className="container px-4 md:px-0 mx-auto grid grid-cols-1  md:grid-cols-2  gap-4  pb-10">
      {data
        .filter((item: { subject: string }) =>
          filter === "Barcha-fanlar" ? true : item.subject === filter
        )
        .map(
          (item: {
            id: any;
            name?: string;
            subject?: string;
            img?: string;
            experience?: string;
          }) => {
            return <ResultCard key={item.id} item={item} />;
          }
        )}
    </section>
  );
};

export default ResultCardList;
