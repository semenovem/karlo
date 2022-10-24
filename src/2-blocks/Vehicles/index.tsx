import React from 'react';

import ModVehicles from '4-cnt/vehicle/ListPreviews';
import BlockLayer from '5-cmp/BlockLayer';
import Poster from '5-cmp/Poster2';
import TextPanel, { Paragraph as P } from '5-cmp/Text';

import pictImg from 'assets/picts/vehicles.png';
import { count as countVehicles } from 'dat/vehicles';

import { IBlockPageProps } from 'types/typ';

export default function BlockVehicles(p: IBlockPageProps) {
  return (
    <BlockLayer className='g-bg-linear-secondary'>
      <Poster bgImg={pictImg} header='НАШ АВТОПАРК' classname='i-after-poster-bottom' />

      <div className='g-page-content'>
        <TextPanel classname=''>
          <P>
            Наш собственный автопарк - {countVehicles} машин
            <br />
            Все машины регулярно проходят техосмотр. Имеют резину по сезону
            <br />
            Есть разрешение для въезда в центр
          </P>
        </TextPanel>

        <ModVehicles classname='i-mod-top' />
      </div>
    </BlockLayer>
  );
}
