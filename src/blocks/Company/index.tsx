import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';
import css from './style.module.css';

import BlockPoster from 'cmp/BlockPoster';

export interface Props {
  children?: React.ReactElement;
}

export default function Company(props: Props) {
  return (
    <div className={cn(css.blk)}>
      <BlockPoster bgImg={bgImg} header='О КОМПАНИИ' />
      постер блока
      <br />
      постер блока
      <br />
    </div>
  );
}
