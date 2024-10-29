import React from "react";
import Header from "../Static/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Static/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
