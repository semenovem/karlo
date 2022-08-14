import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  children?: React.ReactNode;
  classname?: string;
}

export default function H1(p: IProps) {
  return <h1 className={cn('f-h1', css.h2, p.classname)}>{p.children}</h1>;
}
