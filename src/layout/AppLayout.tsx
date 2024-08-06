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
  // const { data, error, isLoading } = useSWR(
  //   `${process.env.ApiUrl}/mainapp/course/`
  // );

  // if (error) return <div>ошибка загрузки</div>;
  // if (isLoading) return <div>загрузка...</div>;
  useEffect(() => {
    AOS.init({
      offset: 50,
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Bm-Maktab</title>
        {/* <link rel="icon" href="../assets/Logo.png" sizes="any" /> */}
        <meta
          property="og:title"
          content="Boborahim Mashrab xususiy maktabi."
          key="title"
        />
      </Head>
      <AppNavbar />
      {children}
      <AppFooter />
    </div>
  );
};

export default AppLayout;
