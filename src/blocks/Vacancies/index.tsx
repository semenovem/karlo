import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';

import Poster from 'cmp/Poster';
import Vacancies from 'mod/vacancies/Previews';

interface IProps {
  children?: React.ReactElement;
  classname?: string;
}

export default function Company(p: IProps) {
  return (
    <article className={cn(p.classname)}>
      <Poster bgImg={bgImg} header='ВАКАНСИИ' classname='i-after-poster-bottom' />

      <Vacancies />
    </article>
  );
}
