import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';
import css from './style.module.css';

import BlockPoster from 'cmp/Poster';
import TextPanel, { Paragraph as P } from 'cmp/texts/TextPanel';

export interface Props {
  children?: React.ReactElement;
  classname?: string;
}

export default function Company(p: Props) {
  return (
    <article className={cn(css.blk, p.classname)}>
      <BlockPoster bgImg={bgImg} header='О КОМПАНИИ' />

      <TextPanel classname='g-block-indent-horiz g-elem-indent-top'>
        <P>Папа Карло осуществляет грузоперевозки с 2010 года </P>
        <P>В компании трудится 100500 хороших людей. Мы делам хорошую доставку</P>
        <P>Обратившись к нам, вы не пожалеете</P>
        <P>С надеждой на сотрудничество Ваш Анатолий</P>
      </TextPanel>
    </article>
  );
}
