import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

export interface Props {
  className?: string;
  children: React.ReactElement[];
}

function FooterColumn(props: Props): React.ReactElement {
  return <div className={cn(props.className, css.col)}>{props.children}</div>;
}

export default FooterColumn;
