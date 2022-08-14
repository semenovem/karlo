import history from 'history/browser';
import React from 'react';

import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Layout from '1-pages/_layouts/Transport';
import PageContacts from '1-pages/Contacts';

import PageMain from '1-pages/Main';
import PageNotFound from '1-pages/NotFound';
import PageVacancies from '1-pages/Vacancies';
import PopupQuickContacts from '4-cnt/PopupQuickContacts';
import * as loc from 'dat/locations';

let countRender = 0; // dev

export default function Router() {
  // dev
  if (countRender++ > 10) {
    console.warn(`[WARN][fosmh4s9] кол-во рендоров: ${countRender}`);
  }

  if (history.location.pathname === loc.basePath) {
    history.replace(loc.main);
  }

  return (
    <>
      <Helmet>
        <meta name='theme-color' content='#2A0505' />
      </Helmet>

      <BrowserRouter>
        <Routes>
          <Route path={loc.basePath + '*'} element={<Layout />}>
            <Route path={loc.main + '/*'} element={<PageMain />} />
            <Route path={loc.contacts + '/*'} element={<PageContacts />} />
            <Route path={loc.vacancies + '/*'} element={<PageVacancies />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
        <QuickContacts />
      </BrowserRouter>
    </>
  );
}

function QuickContacts() {
  const location = useLocation();
  const navigate = useNavigate();

  return <PopupQuickContacts isOpen={loc.isQuickContacts(location.pathname)} onClose={() => navigate(-1)} />;
}
