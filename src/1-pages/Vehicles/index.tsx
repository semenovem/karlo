import React from 'react';

import { Helmet } from 'react-helmet';

import BlockVehicles from '2-blocks/Vehicles';

export default function Vehicles() {
  return (
    <>
      <Helmet>
        <title>Автопарк</title>
      </Helmet>

      <BlockVehicles />
    </>
  );
}
