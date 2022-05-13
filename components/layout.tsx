import React from "react";
import Header from "./header";
import Meta from "./meta";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
