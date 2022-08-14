import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';
import css from './style.module.css';

import Poster from '5-cmp/Poster';
import TextPanel, { Paragraph as P } from '5-cmp/Text';

interface IProps {
  children?: React.ReactElement;
  classname?: string;
}

export default function BlockB2b(p: IProps) {
  return (
    <article className={cn(p.classname)}>
      <Poster
        bgImg={bgImg}
        header='СОТРУДНИЧЕСТВО С ОРГАНИЗАЦИЯМИ'
        clsTitle={css.title}
        classname='i-after-poster-bottom'
      />

      <TextPanel classname=''>
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
