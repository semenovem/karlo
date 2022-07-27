import React from "react";

import Header from "../../cmp/Header";
import Footer from "../../cmp/Footer";
import "./style.css";

export interface Props {
  children: React.ReactElement[];
}

function SiteTransport(props: Props) {
  return (
    <>
      <Header/>

      <main>{props.children}</main>

      <Footer/>
    </>
  );
}

export default SiteTransport;
