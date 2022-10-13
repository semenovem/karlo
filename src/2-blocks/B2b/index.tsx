import React from 'react';

import css from './style.module.css';

import BlockLayer from '5-cmp/BlockLayer';
import Poster from '5-cmp/Poster2';
import TextPanel, { Paragraph as P } from '5-cmp/Text';

import pictImg from 'assets/picts/b2b.png';
import { IBlockPageProps } from 'types/typ';

export default function BlockB2b(p: IBlockPageProps) {
  return (
    <BlockLayer className='g-bg-linear-primary'>
      <Poster bgImg={pictImg} header='СОТРУДНИЧЕСТВО С ОРГАНИЗАЦИЯМИ' classname='i-after-poster-bottom' />

      <TextPanel classname=''>
        <P>Папа Карло успешно сотрудничает с организациями с 2010 года </P>
        <P>
          Мы готовы своевременно и качественно закрыть потребность в доставке мебели.
          <br /> также оказываем услуги сборки мебели
        </P>
        <P>Обратившись к нам, вы не пожалеете</P>
        <P>С надеждой на сотрудничество Ваш Анатолий</P>
      </TextPanel>
    </BlockLayer>
  );
}
