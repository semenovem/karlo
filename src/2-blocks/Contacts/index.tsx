import React from 'react';

import ModContacts from '4-cnt/Contacts';
import MapOffice from '4-cnt/maps/Office';
import BlockLayer from '5-cmp/BlockLayer';
import Poster from '5-cmp/Poster2';

import pictImg from 'assets/picts/contacts.png';

import { IBlockPageProps } from 'types/typ';

export default function BlockContacts(p: IBlockPageProps) {
  return (
    <BlockLayer className='g-bg-linear-primary'>
      <Poster bgImg={pictImg} header='КОНТАКТЫ' classname='i-after-poster-bottom' />

      <div className='g-page-content'>
        <ModContacts classname='i-mod-top' />

        {/*{p.classname === '23434' && <MapOffice classname='i-mod-top' />}*/}
      </div>
    </BlockLayer>
  );
}
