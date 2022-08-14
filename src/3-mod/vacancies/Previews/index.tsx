import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import H5 from '5-cmp/Text/H5';

import { vacancies } from 'dat/vacancies';

interface IProps {
  classname?: string;
}

export default function Previews(p: IProps) {
  return <div className={cn(p.classname)}>{renderVacancies()}</div>;
}

function renderVacancies() {
  return vacancies.map((vac, i) => (
    <section className={css.vac} key={i}>
      <H5>{vac.title}</H5>
      <div className={cn('f-secondary-pale', css.responsibilities)}>{vac.responsibilities}</div>
      <div className={cn('f-secondary-pale', css.responsibilities)}>{vac.requirements}</div>
    </section>
  ));
}
