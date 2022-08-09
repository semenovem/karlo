import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import H2 from 'cmp/texts/Title/H2';

export interface Props {
  children?: React.ReactElement;
  bgImg?: string;
  header: string;
  title?: string;
  classname?: string;
}

export default function BlockPoster(p: Props) {
  const st: React.CSSProperties = { backgroundImage: 'url(' + p.bgImg + ')' };

  return (
    <section className={cn(css.blk, p.classname)}>
      <div className={css.bg} style={st} />
      <H2 classname={css.title}>{p.header}</H2>
    </section>
  );
}
