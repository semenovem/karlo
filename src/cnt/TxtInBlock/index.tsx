import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

export interface Props {
  children?: React.ReactElement;
}

export default function Company(props: Props) {
  return <div className={cn(css.blk)}>текст блока текст блока текст блока</div>;
}
