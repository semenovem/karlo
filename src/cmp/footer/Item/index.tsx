import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface Props {
  className?: string;
  content: string;
  onClick: () => any;
  loc: string; // путь перехода
}

export default function FooterItem(p: Props): React.ReactElement {
  // TODO обработать p.href - сделать ссылку
  return (
    <a className={cn(css.item, p.className)} onClick={p.onClick} href={p.loc}>
      {p.content}
    </a>
  );
}
