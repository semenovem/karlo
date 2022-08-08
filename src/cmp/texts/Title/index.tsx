import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface Props {
  children?: React.ReactNode;
  classname?: string;
}

export enum kind {
  h1,
  h2,
  h3,
  h1,
  h1,
}

export default function Title(p: Props) {
  return <h1 className={cn(css.h1, p.classname)}>{p.children}</h1>;
}
