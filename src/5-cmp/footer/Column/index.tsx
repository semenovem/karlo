import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  className?: string;
  children: React.ReactElement[];
}

export default function FooterColumn(props: IProps): React.ReactElement {
  return <div className={cn(props.className, css.col)}>{props.children}</div>;
}
