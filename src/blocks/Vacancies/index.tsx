import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';

import BlockPoster from 'cmp/Poster';
import Vacancies from 'mod/vacancies/ListPreviews';

interface IProps {
  children?: React.ReactElement;
  classname?: string;
}

export default function Company(p: IProps) {
  return (
    <article className={cn(p.classname)}>
      <BlockPoster bgImg={bgImg} header='ВАКАНСИИ' />

      <Vacancies />
    </article>
  );
}
