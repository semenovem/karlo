import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface Props {
  children?: React.ReactNode;
  classname?: string;
}

export default function H5(p: Props) {
  return <h5 className={cn(css.h5, p.classname)}>{p.children}</h5>;
}
