import React from 'react';

import { Helmet } from 'react-helmet';

import BlockB2b from '2-blocks/B2b';
import BlockCompany from '2-blocks/Company';
import BlockContacts from '2-blocks/Contacts';
import BlockPrices from '2-blocks/Prices';
import BlockVacancies from '2-blocks/Vacancies';
import BlockVehicles from '2-blocks/Vehicles';

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>Грузовые перевозки</title>
      </Helmet>

      <BlockCompany />
      <BlockPrices />
      <BlockVehicles />
      <BlockB2b />
      <BlockVacancies />
      <BlockContacts />
    </>
  );
}
