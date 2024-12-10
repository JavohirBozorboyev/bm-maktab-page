/* eslint-disable react-hooks/rules-of-hooks */
import ResultCardList from "@/PageSection/Result/ResultCards/ResultCardList";
import ResultPageHeroSection from "@/PageSection/Result/ResultHero/ResultPageHeroSection";
import ResultPageTitle from "@/PageSection/Result/ResultHero/ResultPageTitle";

import React, { useState } from "react";

type Props = {
  stundetResult: any;
};

const index = ({ stundetResult }: Props) => {
  const [filter, setFilter] = useState<string>("Barcha-fanlar");

  return (
    <div>
      <ResultPageHeroSection />

      <div className="py-8">
        <ResultPageTitle setFilter={setFilter} filter={filter} />
      </div>
      <ResultCardList filter={filter} data={stundetResult} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const student = await fetch(`${process.env.ApiUrl}/main-website/results/`);
  const stundetResult = await student.json();

  return {
    props: {
      stundetResult,
    },
    revalidate: 10 * 60,
  };
}
