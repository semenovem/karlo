import React from "react";
import MainPage from "../pages/Main";
import { Helmet } from "react-helmet";

function Router() {
  return (
    <>
      <Helmet>
        <title>Грузовые перевозки</title>
        <meta name="theme-color" content="#2A0505" />
      </Helmet>

      <MainPage />
    </>
  );
}

export default Router;
