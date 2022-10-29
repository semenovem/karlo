import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export default function BlockLayerContent(p: IProps) {
  return <div className={cn(css.content, p.className)}>{p.children}</div>;
}
