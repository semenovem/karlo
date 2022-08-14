import React from 'react';

import bgImg from './assets/img.jpg';

import Poster from '5-cmp/Poster';
import TextPanel, { Paragraph as P } from '5-cmp/Text';

interface IProps {
  children?: React.ReactElement;
  classname?: string;
}

export default function BlockCompany(p: IProps) {
  return (
    <article className={p.classname}>
      <Poster bgImg={bgImg} header='О КОМПАНИИ' classname='i-after-poster-bottom' />

      <TextPanel classname=''>
        <P>Папа Карло осуществляет грузоперевозки с 2010 года </P>
        <P>В компании трудится 100500 хороших людей. Мы делам хорошую доставку</P>
        <P>Обратившись к нам, вы не пожалеете</P>
        <P>С надеждой на сотрудничество Ваш Анатолий</P>
      </TextPanel>
    </article>
  );
}
