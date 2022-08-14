import React from 'react';

import { Helmet } from 'react-helmet';

import BlockCompany from '2-blocks/Company';

export default function PageCompany() {
  return (
    <>
      <Helmet>
        <title>О Компании</title>
      </Helmet>

      <BlockCompany />
    </>
  );
}
