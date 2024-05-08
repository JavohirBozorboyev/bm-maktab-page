import AppFooter from "@/Components/Footer/AppFooter";
import AppNavbar from "@/Components/Nav/AppNavbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <AppNavbar />
      {children}
      <AppFooter />
    </div>
  );
};

export default AppLayout;
