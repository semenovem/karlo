import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export default function BlockLayer(p: IProps) {
  return <article className={cn(css.blockLayer, 'i-page-both', p.className)}>{p.children}</article>;
}
