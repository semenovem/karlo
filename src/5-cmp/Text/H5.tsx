import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  children?: React.ReactNode;
  classname?: string;
}

export default function H5(p: IProps) {
  return <h5 className={cn('f-h5', css.h2, p.classname)}>{p.children}</h5>;
}
