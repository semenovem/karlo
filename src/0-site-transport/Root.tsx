import history from 'history/browser';

import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Layout from '1-pages/_layouts/Transport';
import PageB2b from '1-pages/B2b';
import PageCompany from '1-pages/Company';
import PageContacts from '1-pages/Contacts';

import PageMain from '1-pages/Main';
import PageNotFound from '1-pages/NotFound';
import PagePrices from '1-pages/Priсes';
import PageVacancies from '1-pages/Vacancies';
import PageVehicles from '1-pages/Vehicles';
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
            <Route path={loc.company + '/*'} element={<PageCompany />} />
            <Route path={loc.prices + '/*'} element={<PagePrices />} />
            <Route path={loc.vehicle + '/*'} element={<PageVehicles />} />
            <Route path={loc.b2b + '/*'} element={<PageB2b />} />
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
