import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';
import css from './style.module.css';

import PriceTable from './Table';

import Poster from 'cmp/Poster';
import TextPanel, { Paragraph as P } from 'cmp/texts/TextPanel';
import H4 from 'cmp/texts/Title/H5';

export interface Props {
  children?: React.ReactElement;
  classname?: string;
}

export default function Prices(p: Props) {
  return (
    <article className={cn(css.blk, p.classname)}>
      <Poster bgImg={bgImg} header='ЦЕНЫ' classname='i-after-poster-bottom' />

      <section className=''>
        <PriceTable classname={css.priceTable} />
      </section>

      <TextPanel classname='i-mod-top'>
        <H4 classname='g-first-line-indent'>Бизнес для Бизнеса</H4>
        <P>Для сотрудничества с организациями у нас есть особые предложения</P>
        <P>Посмотрите раздел Сотрудничество или свяжитесь с нами</P>
      </TextPanel>
    </article>
  );
}
