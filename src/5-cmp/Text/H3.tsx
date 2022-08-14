import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  children?: React.ReactNode;
  classname?: string;
}

export default function H3(p: IProps) {
  return <h3 className={cn('f-h3', css.h2, p.classname)}>{p.children}</h3>;
}
