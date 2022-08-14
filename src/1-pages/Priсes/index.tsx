import React from 'react';

import { Helmet } from 'react-helmet';

import BlockPrices from '2-blocks/Prices';

export default function Prices() {
  return (
    <>
      <Helmet>
        <title>Цены</title>
      </Helmet>

      <BlockPrices />
    </>
  );
}
