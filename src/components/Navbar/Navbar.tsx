import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="w-1/3">
        <div className="flex justify-between">
          <Link to="/">Cartas</Link>
          <Link to="/dashboard">TCG</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
