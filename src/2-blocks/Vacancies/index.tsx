import React from 'react';

import Previews from '4-cnt/vacancies/Previews';
import BlockLayer from '5-cmp/BlockLayer';
import Poster from '5-cmp/Poster2';
import Text, { Paragraph as P } from '5-cmp/Text';
import pictImg from 'assets/picts/vacancy.png';
import { phoneHRPretty } from 'dat/contacts';

import { IBlockPageProps } from 'types/typ';

export default function BlockVacancies(p: IBlockPageProps) {
  return (
    <BlockLayer className='g-bg-linear-secondary'>
      <Poster bgImg={pictImg} header='ВАКАНСИИ' classname='i-after-poster-bottom' />

      <div className='g-page-content'>
        <Previews />

        <Text classname='i-mod-top'>
          <P>
            Что бы откликнутся, позвоните на номер телефона:
            <br />
            {phoneHRPretty}
          </P>
        </Text>
      </div>
    </BlockLayer>
  );
}
