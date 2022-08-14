import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  children?: React.ReactElement;
}

export default function Company(p: IProps) {
  return <div className={cn(css.blk)}>текст блока текст блока текст блока</div>;
}
