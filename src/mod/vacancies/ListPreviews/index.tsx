import React from 'react';

import css from './style.module.css';

import H5 from 'cmp/texts/Title/H5';

import { vacancies } from 'dat/vacancies';

interface IProps {
  classname?: string;
}

export default function ListPreviews(p: IProps) {
  return <div className={css.listPreview}>{renderVacancies()}</div>;
}

function renderVacancies() {
  return vacancies.map((vac, i) => (
    <section className={css.vac} key={i}>
      <H5>{vac.title}</H5>
      <div className={css.responsibilities}>{vac.responsibilities}</div>
    </section>
  ));
}
