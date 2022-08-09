import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface Props {
  children?: React.ReactNode;
  classname?: string;
}

export default function H1(p: Props) {
  return <h1 className={cn(css.h1, p.classname)}>{p.children}</h1>;
}
