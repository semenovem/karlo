import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  children?: React.ReactNode;
  classname?: string;
}

export default function H4(p: IProps) {
  return <h4 className={cn('f-h4', css.h2, p.classname)}>{p.children}</h4>;
}
