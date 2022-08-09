import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface Props {
  children?: React.ReactNode;
  classname?: string;
}

export default function H4(p: Props) {
  return <h4 className={cn(css.h4, p.classname)}>{p.children}</h4>;
}
