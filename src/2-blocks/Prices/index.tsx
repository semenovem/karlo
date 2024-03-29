import React from 'react';

import css from './style.module.css';
import PriceTable from './Table';

import BlockLayer from '5-cmp/BlockLayer';
import ContactUs from '5-cmp/ContactUs';
import Poster from '5-cmp/Poster2';
import TextPanel, { Paragraph as P } from '5-cmp/Text';
import H4 from '5-cmp/Text/H5';
import pictImg from 'assets/picts/price.png';

import { IBlockPageProps } from 'types/typ';

export default function BlockPrices(p: IBlockPageProps) {
  return (
    <BlockLayer className='g-bg-linear-primary'>
      <Poster bgImg={pictImg} header='ЦЕНЫ' classname='i-after-poster-bottom' />

      <div className='g-page-content'>
        <section className=''>
          <PriceTable classname={css.priceTable} />
        </section>

        <TextPanel classname='i-mod-top'>
          <H4 classname='g-first-line-indent'>Бизнес для Бизнеса</H4>
          <P>Для сотрудничества с организациями у нас есть особые предложения</P>
          <P>Посмотрите раздел Сотрудничество или свяжитесь с нами</P>
        </TextPanel>

        <ContactUs classname='i-mod-top' />
      </div>
    </BlockLayer>
  );
}

// 2) Добавить
// Аренда автомобиля без водителя для организаций
// Москва и МО
// Газель бизнес - 3500 в сутки
// Газель NEXT - 4000 в сутки
// пробег до 300 км в сутки

// 3) Аренда автомобиля с водителем - 10к 8 часов / до 200км по Москве и МО
// в примечание - экспедитор предоставляется заказчиком
