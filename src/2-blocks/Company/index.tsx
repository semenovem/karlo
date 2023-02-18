import React from 'react';

import BlockLayer from '5-cmp/BlockLayer';
import Content from '5-cmp/BlockLayer/Content';

import Poster from '5-cmp/Poster2';
import TextPanel, { Paragraph as P } from '5-cmp/Text';
import H4 from '5-cmp/Text/H4';
import TextInfo from '5-cmp/Text/Info';
import topImg from 'assets/picts/company.png';

import { count as countEmployees } from 'dat/employees';
import { count as countVehicles } from 'dat/vehicles';

import { IBlockPageProps } from 'types/typ';

export default function BlockCompany(p: IBlockPageProps) {
  return (
    <BlockLayer className='g-bg-linear-main'>
      <Poster bgImg={topImg} header='О КОМПАНИИ' classname='i-after-poster-bottom' />

      <Content>
        <TextPanel classname=''>
          <TextInfo>
            <H4>ИП Глазков осуществляет грузоперевозки с 2011 года</H4>
            <br />
            Свой автопарк, состояший {countVehicles}&nbsp;грузовых машин. Штат компании составляет более{' '}
            {countEmployees}&nbsp;сотрудников. Основной вид деятельности - комплексные услуги по доставке, сборке для
            организаций.
          </TextInfo>

          <TextInfo classname='i-elem-top'>
            Среди наших клиентов производители мебели и ритейл бытовой техники. Мы обеспечиваем транспортные услуги,
            сборку/установку мебели, обслуживание рекламаций. Подробнее в разделе{' '}
            <span className='f-link'>Сотрудничество с организациями</span>
          </TextInfo>

          <TextInfo classname='i-elem-top'>Направление аренды автомобиля без водителя -</TextInfo>

          <TextInfo classname='i-elem-top'>
            Направление междугородних перевозок - .............................................
            <br />
            <br /> <span className='f-bold'>С надеждой на сотрудничество Ваш Анатолий</span>
          </TextInfo>
        </TextPanel>
      </Content>
    </BlockLayer>
  );
}
