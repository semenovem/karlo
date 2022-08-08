import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

interface Props {
  children?: React.ReactNode;
  classname?: string;
}

export default function H2(p: Props) {
  return <h2 className={cn(css.h2, p.classname)}>{p.children}</h2>;
}
