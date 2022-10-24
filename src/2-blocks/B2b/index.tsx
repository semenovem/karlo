import React from 'react';

import css from './style.module.css';

import BlockLayer from '5-cmp/BlockLayer';
import Poster from '5-cmp/Poster2';
import TextPanel, { Paragraph as P, TextSecond } from '5-cmp/Text';
import H3 from '5-cmp/Text/H3';

import pictImg from 'assets/picts/b2b.png';
import { IBlockPageProps } from 'types/typ';

export default function BlockB2b(p: IBlockPageProps) {
  return (
    <BlockLayer className='g-bg-linear-primary'>
      <Poster bgImg={pictImg} header='СОТРУДНИЧЕСТВО С ОРГАНИЗАЦИЯМИ' classname='i-after-poster-bottom' />

      <div className='g-page-content'>
        <TextPanel classname=''>
          <P>Папа Карло успешно сотрудничает с организациями с 2010 года </P>
          <P>
            Мы готовы своевременно и качественно закрыть потребность в доставке мебели.
            <br /> также оказываем услуги сборки мебели
          </P>
          <P>Обратившись к нам, вы не пожалеете</P>
          <P>С надеждой на сотрудничество Ваш Анатолий</P>
        </TextPanel>

        <TextPanel classname='i-elem-top'>
          <H3>Ваши преимущества</H3>
          <div className='i-elem-top'>
            <TextSecond>Ночное хранение товара</TextSecond>
            <TextSecond>Въезд в ТТК</TextSecond>
            <TextSecond>Трекер автомобилей</TextSecond>
            <TextSecond>Рабочий номер в каждом автомобиле</TextSecond>
            <TextSecond>Спец-одежда для сотрудников, возможно брендирование</TextSecond>
            <TextSecond>Парковка в центре при доставке включана в стоимость</TextSecond>
            <TextSecond>Автопарк не старше 5-и лет</TextSecond>
            <TextSecond>Возможно брендирование автомобиля</TextSecond>
            <TextSecond>Квалифицированные, профессиональные водители</TextSecond>
          </div>
        </TextPanel>
      </div>
    </BlockLayer>
  );
}
