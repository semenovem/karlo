import React from "react";
import Layout from "./Layout";
import Main from "./pages/Main";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as loc from "./../constants/locations"
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import {Helmet} from "react-helmet";
import "./style.css";
import "./vars.css";

let countRender = 0 // dev

function Router() {
  // dev
  if (countRender++ > 10) {
    console.warn(`[WARN][fosmh4s9] кол-во рендоров: ${countRender}`)
  }

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#2A0505"/>
      </Helmet>

      <BrowserRouter>
        <Routes>
          <Route path={loc.root} element={<Layout/>}>

            <Route path="" element={<Main/>}/>
            <Route path={loc.contacts} element={<Contacts/>}/>

            <Route path="*" element={<NotFound/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
