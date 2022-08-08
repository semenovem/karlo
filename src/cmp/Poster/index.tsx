import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

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
      <h3 className={cn(css.title, 'f-block-header')}>{p.header}</h3>
    </section>
  );
}
