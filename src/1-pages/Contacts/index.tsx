import React from 'react';

import { Helmet } from 'react-helmet';

import BlockContacts from '2-blocks/Contacts';

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Контакты организации</title>
      </Helmet>

      <BlockContacts />
    </>
  );
}
