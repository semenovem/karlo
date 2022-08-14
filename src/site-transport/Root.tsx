import React from 'react';

import { Helmet } from 'react-helmet';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import QuickContacts from 'cnt/PopupQuickContacts';
import * as loc from 'constants/locations';
import PageContacts from 'pages/Contacts';
import Layout from 'pages/layouts/Transport';

import PageMain from 'pages/Main';
import PageNotFound from 'pages/NotFound';

let countRender = 0; // dev

function Router() {
  // dev
  if (countRender++ > 10) {
    console.warn(`[WARN][fosmh4s9] кол-во рендоров: ${countRender}`);
  }

  return (
    <>
      <Helmet>
        <meta name='theme-color' content='#2A0505' />
      </Helmet>

      <BrowserRouter>
        <Routes>
          <Route path={loc.root} element={<Layout />}>
            <Route path='' element={<WrapMain />}>
              <Route path={loc.quickContacts} element={<QuickContacts />} />
            </Route>

            <Route path={loc.contacts} element={<WrapContacts />}>
              <Route path={loc.quickContacts} element={<QuickContacts />} />
            </Route>

            <Route path='*' element={<WrapNotFound />}>
              <Route path={loc.quickContacts} element={<QuickContacts />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;

const WrapMain = () => (
  <>
    <Outlet />
    <PageMain />
  </>
);
const WrapContacts = () => (
  <>
    <Outlet />
    <PageContacts />
  </>
);
const WrapNotFound = () => (
  <>
    <Outlet />
    <PageNotFound />
  </>
);
