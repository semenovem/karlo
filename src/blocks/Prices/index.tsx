import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';
import css from './style.module.css';

import PriceTable from './Table';

import BlockPoster from 'cmp/Poster';
import TextPanel, { Paragraph } from 'cmp/texts/TextPanel';
import H4 from 'cmp/texts/Title/H5';

export interface Props {
  children?: React.ReactElement;
  classname?: string;
}

export default function Prices(p: Props) {
  return (
    <article className={cn(css.blk, p.classname)}>
      <BlockPoster bgImg={bgImg} header='ЦЕНЫ' />

      <section className='g-block-indent-horiz g-elem-indent-top'>
        <PriceTable classname={css.priceTable} />
      </section>

      <TextPanel classname='g-block-indent-horiz g-elem-indent-x2-top'>
        <H4 classname='g-first-line-indent'>Бизнес для Бизнеса</H4>
        <Paragraph>Для сотрудничества с организациями у нас есть особые предложения</Paragraph>
        <Paragraph>Посмотрите раздел Сотрудничество или свяжитесь с нами</Paragraph>
      </TextPanel>
    </article>
  );
}
