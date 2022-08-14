import React from 'react';

import { Helmet } from 'react-helmet';

import BlockVacancies from '2-blocks/Vacancies';

export default function PageVacancies() {
  return (
    <>
      <Helmet>
        <title>Вакансии</title>
      </Helmet>

      <BlockVacancies />
    </>
  );
}
