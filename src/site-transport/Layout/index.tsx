import React from "react";
import {Outlet} from "react-router-dom";

import Header from "../cnt/Header";
import Footer from "../cnt/Footer";

export interface Props {
  children?: React.ReactElement;
}

function Layout(props: Props) {
  return (
    <>
      <Header/>

      <main>
        <Outlet/>
      </main>

      <Footer/>
    </>
  );
}

export default Layout;
