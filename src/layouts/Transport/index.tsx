import React from "react";
import { Outlet } from "react-router-dom";

import Header from "blocks/Header";
import Footer from "blocks/Footer";

export interface Props {
  children?: React.ReactElement;
}

export default function Layout(props: Props) {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
