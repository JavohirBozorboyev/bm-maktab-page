import AppFooter from "@/Components/Footer/AppFooter";
import AppNavbar from "@/Components/Nav/AppNavbar";
import Head from "next/head";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      offset: 50,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Bm-Maktab</title>
        {/* <link rel="icon" href="../assets/Logo.png" sizes="any" /> */}
        <meta
          property="og:title"
          content="Boborahim Mashrab xususiy maktabi."
          key="title"
        />
      </Head>
      <div className="relative z-10  mb-[850px] sm:mb-[600px] md:mb-[500px]  lg:mb-[400px] xl:mb-[350px] bg-white rounded-b-[80px]">
        <AppNavbar />
        {children}
      </div>
      <AppFooter />
    </>
  );
};

export default AppLayout;
