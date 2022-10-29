import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  classname?: string;
  children?: React.ReactNode;
}

export default function Info(p: IProps): React.ReactElement {
  return <p className={cn(css.info, p.classname)}>{p.children}</p>;
}
