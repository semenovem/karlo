import cn from 'classnames';
import React, { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';

import css from './style.module.css';

interface IProps {
  className?: string;
  content: string;
  goTo: string; // путь перехода
}

const active: CSSProperties = {
  textDecoration: 'underline',
};

export default function FooterItem(p: IProps): React.ReactElement {
  return (
    <NavLink className={cn(css.item, p.className)} to={p.goTo} style={styleActive}>
      {p.content}
    </NavLink>
  );
}

function styleActive(props: { isActive: boolean }): CSSProperties {
  return (props.isActive && active) || {};
}
