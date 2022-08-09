import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface Props {
  children?: React.ReactNode;
  classname?: string;
}

export default function H3(p: Props) {
  return <h3 className={cn(css.h3, p.classname)}>{p.children}</h3>;
}
