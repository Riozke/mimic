import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background text-text-primary dark:bg-d-background dark:text-d-text-primary">
      <Sidebar />
      <div className="flex min-h-screen flex-col">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
