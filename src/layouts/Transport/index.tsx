import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from 'blocks/Footer';
import Header from 'blocks/Header';

export default function Layout() {
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
