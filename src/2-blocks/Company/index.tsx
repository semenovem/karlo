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

      <div className={'g-page-content'}>
        <TextPanel classname=''>
          <P>ИП Глазков осуществляет грузоперевозки с 2011 года</P>
          <P>Свой автопарк, состояший из более 10 грузовых машин</P>
          <P>Штат компании составляет 25 человек (водители-экспедиторы, сборщики, грузчики</P>
          <P>Основной вид деятельности - комплексные услуги по доставке, сборке для организаций</P>
          <P>С надеждой на сотрудничество Ваш Анатолий</P>
        </TextPanel>
      </div>
    </BlockLayer>
  );
}
