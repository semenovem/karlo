import React from 'react';

import bgImg from './assets/img.jpg';

import ModVehicles from '3-mod/vehicle/ListPreviews';
import Poster from '5-cmp/Poster';
import TextPanel, { Paragraph as P } from '5-cmp/Text';

import { count as countVehicles } from 'dat/vehicles';

interface IProps {
  children?: React.ReactElement;
  classname?: string;
}

export default function BlockVehicles(p: IProps) {
  return (
    <article className={p.classname}>
      <Poster bgImg={bgImg} header='НАШ АВТОПАРК' classname='i-after-poster-bottom' />

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
    </article>
  );
}
