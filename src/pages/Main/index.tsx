import React from 'react';

import { Helmet } from 'react-helmet';

import B2b from 'blocks/B2b';
import BlockCompany from 'blocks/Company';
import BlockPrices from 'blocks/Prices';
import Vacancies from 'blocks/Vacancies';
import Vehicle from 'blocks/Vehicle';

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>Грузовые перевозки</title>
      </Helmet>

      <BlockCompany />
      <BlockPrices classname='g-block-indent-top' />
      <Vehicle classname='g-block-indent-top' />
      <B2b classname='g-block-indent-top' />
      <Vacancies classname='g-block-indent-top' />
    </>
  );
}
