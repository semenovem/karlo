import React from 'react';

import { Helmet } from 'react-helmet';

import BlockCompany from 'blocks/Company';
import BlockPrices from 'blocks/Prices';

function MainPage() {
  return (
    <>
      <Helmet>
        <title>Грузовые перевозки</title>
      </Helmet>

      <BlockCompany />

      <BlockPrices classname='g-block-indent-top' />
    </>
  );
}

export default MainPage;
