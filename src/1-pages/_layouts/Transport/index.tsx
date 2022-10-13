import React from 'react';
import { Outlet } from 'react-router-dom';

import BlockFooter from '2-blocks/Footer';
import BlockHeader from '2-blocks/Header';

export default function Layout() {
  return (
    <>
      <BlockHeader />

      <main>
        <Outlet />
      </main>

      <BlockFooter className='i-block-top' />
    </>
  );
}
