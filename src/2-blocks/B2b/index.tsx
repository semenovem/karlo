import React from 'react';

import BlockLayer from '5-cmp/BlockLayer';
import Content from '5-cmp/BlockLayer/Content';

import Poster from '5-cmp/Poster2';
import TextPanel, { Paragraph as P, TextSecond } from '5-cmp/Text';
import H4 from '5-cmp/Text/H4';

import pictImg from 'assets/picts/b2b.png';
import { IBlockPageProps } from 'types/typ';

export default function BlockB2b(p: IBlockPageProps) {
  return (
    <BlockLayer className='g-bg-linear-primary'>
      <Poster bgImg={pictImg} header='СОТРУДНИЧЕСТВО С ОРГАНИЗАЦИЯМИ' classname='i-after-poster-bottom' />

      <Content>
        <TextPanel classname=''>
          <P>Мы успешно сотрудничаем с организациями с 2011 года </P>
          <P>
            Мы готовы своевременно и качественно закрыть потребность в доставке мебели.
            <br /> оказываем услуги сборки мебели. Оплата по безналичному расчету
          </P>
          <P>Обратившись к нам, вы не пожалеете</P>
          <P>С надеждой на сотрудничество Ваш Анатолий</P>
          Возможно приобретение А/М под клиента. Регулярное обновление автопарка
        </TextPanel>

        <TextPanel classname='i-elem-top'>
          <H4>Ваши преимущества</H4>
          <ul className='g-ul-you-preim'>
            <li>GPS Трекер автомобилей</li>
            <li>Въезд в ТТК</li>
            <li>Парковка в центре при доставке включана в стоимость</li>
            <li>Рабочий номер в каждом автомобиле</li>
            <li>Автопарк не старше 5-и лет</li>
            <li>Возможно брендирование автомобиля</li>
            <li>Спец-одежда для сотрудников, возможно брендирование</li>
            <li>Квалифицированные, профессиональные водители</li>
            <li>Ночное хранение товара</li>
            <li>Страхование груза</li>
          </ul>
        </TextPanel>
      </Content>
    </BlockLayer>
  );
}

// мы предоставляем услуги по доставке
// аренда автомобиля с водителем - 10к 8 часов / до 200км по Москве и МО
