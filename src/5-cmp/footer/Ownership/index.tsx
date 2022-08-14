import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  className?: string;
}

export default function Ownership(props: IProps): React.ReactElement {
  return <div className={cn(css.item, props.className)}>{'© 2014     ИП Глазков'}</div>;
}
