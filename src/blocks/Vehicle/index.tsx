import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';
import css from './style.module.css';

import BlockPoster from 'cmp/Poster';
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
      <BlockPoster bgImg={bgImg} header='НАШ АВТОПАРК' />

      <TextPanel classname='g-block-indent-horiz g-elem-indent-top'>
        <P>
          Наш собственный автопарк - {countVehicles} машин
          <br />
          Все машины регулярно проходят техосмотр. Имеют резину по сезону
          <br />
          Есть разрешение для въезда в центр
        </P>
      </TextPanel>

      <ModVehicles classname='g-block-indent-horiz g-elem-indent-top' />
    </article>
  );
}
