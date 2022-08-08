import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';
import css from './style.module.css';

import BlockPoster from 'cmp/Poster';
import TextPanel, { Paragraph } from 'cmp/texts/TextPanel';

export interface Props {
  children?: React.ReactElement;
  classname?: string;
}

export default function Prices(p: Props) {
  return (
    <article className={cn(css.blk, p.classname)}>
      <BlockPoster bgImg={bgImg} header='ЦЕНЫ' />

      <section className='g-block-indent-horiz'>
        <h5>Цены на перевозки</h5>
      </section>

      <TextPanel classname='g-block-indent-horiz'>
        <Paragraph>Папа Карло осуществляет грузоперевозки с 2010 года </Paragraph>

        <Paragraph>Параграф 2</Paragraph>
      </TextPanel>
    </article>
  );
}
