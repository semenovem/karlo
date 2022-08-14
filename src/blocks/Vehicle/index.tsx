import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';
import css from './style.module.css';

import Poster from 'cmp/Poster';
import TextPanel, { Paragraph as P } from 'cmp/texts/TextPanel';

import { count as countVehicles } from 'dat/vehicles';
import ModVehicles from 'mod/vehicle/ListPreviews';

export interface Props {
  children?: React.ReactElement;
  classname?: string;
}

export default function Company(p: Props) {
  return (
    <article className={cn(css.blk, p.classname)}>
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
