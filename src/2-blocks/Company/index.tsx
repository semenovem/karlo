import React from 'react';

import BlockLayer from '5-cmp/BlockLayer';
import Poster from '5-cmp/Poster2';
import TextPanel, { Paragraph as P } from '5-cmp/Text';
import topImg from 'assets/picts/company.png';

import { IBlockPageProps } from 'types/typ';

export default function BlockCompany(p: IBlockPageProps) {
  return (
    <BlockLayer className='g-bg-linear-main'>
      <Poster bgImg={topImg} header='О КОМПАНИИ' classname='i-after-poster-bottom' />

      <TextPanel classname=''>
        <P>Папа Карло осуществляет грузоперевозки с 2010 года </P>
        <P>В компании трудится 100500 хороших людей. Мы делам хорошую доставку</P>
        <P>Обратившись к нам, вы не пожалеете</P>
        <P>С надеждой на сотрудничество Ваш Анатолий</P>
      </TextPanel>
    </BlockLayer>
  );
}
