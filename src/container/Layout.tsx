import React, { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex h-full w-screen">{children}</div>
    </div>
  );
};

export default Layout;
