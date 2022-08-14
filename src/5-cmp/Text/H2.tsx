import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  children?: React.ReactNode;
  classname?: string;
}

export default function H2(p: IProps) {
  return <h2 className={cn('f-h2', css.h2, p.classname)}>{p.children}</h2>;
}
