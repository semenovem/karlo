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

export default function B2b(p: Props) {
  return (
    <article className={cn(p.classname)}>
      <BlockPoster bgImg={bgImg} header='СОТРУДНИЧЕСТВО С ОРГАНИЗАЦИЯМИ' clsTitle={css.title} />

      <TextPanel classname='g-block-indent-horiz g-elem-indent-top'>
        <P>Папа Карло успешно сотрудничает с организациями с 2010 года </P>
        <P>
          Мы готовы своевременно и качественно закрыть потребность в доставке мебели.
          <br /> также оказываем услуги сборки мебели
        </P>
        <P>Обратившись к нам, вы не пожалеете</P>
        <P>С надеждой на сотрудничество Ваш Анатолий</P>
      </TextPanel>
    </article>
  );
}
