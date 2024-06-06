import AppFooter from "@/Components/Footer/AppFooter";
import AppNavbar from "@/Components/Nav/AppNavbar";
import React from "react";
import useSWR from "swr";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  // const { data, error, isLoading } = useSWR(
  //   `${process.env.ApiUrl}/mainapp/course/`
  // );

  // if (error) return <div>ошибка загрузки</div>;
  // if (isLoading) return <div>загрузка...</div>;
  return (
    <div>
      <AppNavbar />
      {children}
      <AppFooter />
    </div>
  );
};

export default AppLayout;
