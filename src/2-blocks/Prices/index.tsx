import React from 'react';

import css from './style.module.css';
import PriceTable from './Table';

import BlockLayer from '5-cmp/BlockLayer';
import Content from '5-cmp/BlockLayer/Content';
import ContactUs from '5-cmp/ContactUs';
import Poster from '5-cmp/Poster2';
import TextPanel, { Paragraph as P } from '5-cmp/Text';
import H4 from '5-cmp/Text/H4';
import TextInfo from '5-cmp/Text/Info';
import pictImg from 'assets/picts/price.png';

import { IBlockPageProps } from 'types/typ';

export default function BlockPrices(p: IBlockPageProps) {
  return (
    <BlockLayer className='g-bg-linear-primary'>
      <Poster bgImg={pictImg} header='ЦЕНЫ' classname='i-after-poster-bottom' />

      <Content>
        <TextPanel classname=''>
          <H4>Автомобиль с водителем-экспедитором</H4>
          <div className='f-secondary-pale'>газель, 18м3 промтоварный фургон</div>
          <br />
          <TextInfo>
            Подача: 7.000 рублей + точка:
            <table>
              <tr>
                <td>с 1 по 5 точки</td>
                <td>-</td>
                <td>1000 руб/точка</td>
              </tr>
              <tr>
                <td>с 6 по 10</td>
                <td>-</td>
                <td>500 руб/точка</td>
              </tr>
              <tr>
                <td>11+</td>
                <td>-</td>
                <td>200 руб/точка</td>
              </tr>
            </table>
            <div className='i-elem-top'>
              пробег - до 200км по Москва и МО
              <br />
              <div>время - до 8 часов</div>
              <div className='f-secondary-pale'>* иные параметры доставки обсуждаются отдельно</div>
            </div>
            что входит в заказ:
            <ul>
              <li>gps трекер</li>
              <li>Въезд в ТТК</li>
              <li>парковки в центре при доставке на точку</li>
              <li>Рабочий номер в каждом автомобиле</li>
            </ul>
            <div>
              дополнительные услуги (на время работы а/м):
              <br />
              грузчик : +4.500
              <br />
              сборщик: +6.000 -- <b>виды работ по сборке</b>
              {/*  виды работ по сборке указать в подсказке при клике:
               сборка кроватей
                сборка корпусной мебели
                сборка тумбочек, комода
                корпусная мебель*/}
            </div>
            и т.д. все преимущества в разделе "Сотрудничество с организациями"
            <br />
            <br />
            {/**/}
            {/**/}
            {/**/}
            <H4>Автомобиль с водителем в аренду</H4>
            <div className='f-secondary-pale'>газель, 18м3 промтоварный фургон</div>
            <div className='f-secondary-pale'>время - до 8часов, пробег - до 200км/сутки по Москве и МО</div>
            стоимость - 10.000руб
            <br />
            что входит в заказ:
            <ul>
              <li>gps трекер</li>
              <li>Въезд в ТТК</li>
              <li>парковки в центре при доставке на точку</li>
              <li>Рабочий номер в каждом автомобиле</li>
            </ul>
            <br />
            {/**/}
            {/**/}
            {/**/}
            <H4>Автомобиль без водителя в аренду</H4>
            <div className='f-secondary-pale'>газель, 18м3 промтоварный фургон</div>
            <div className='f-secondary-pale'>пробег: до 200км/сутки по Москве и МО</div>
            <br />
            <table>
              <tr>
                <td>Газель бизнес</td>
                <td>-</td>
                <td>3.500 руб/сутки</td>
              </tr>
              <tr>
                <td>Газель NEXT</td>
                <td>-</td>
                <td>4.000 руб/сутки</td>
              </tr>
            </table>
            <div className='f-secondary-pale'>* экспедитор предоставляется заказчиком</div>
          </TextInfo>
        </TextPanel>
      </Content>
      <ContactUs classname='i-mod-top' />
    </BlockLayer>
  );
}
