import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import Btn, { kind, size } from '../Btn';

interface IProps {
  className?: string;
  onOpen: () => void;
  size?: size;
}

const BtnHamMenu: React.FC<IProps> = (p: IProps) => (
  <Btn
    onClick={p.onOpen}
    className={cn(css.btn, p.className)}
    kind={kind.hum}
    {...(p.size && { size: p.size })}
    ariaLabel='Открыть меню'
  />
);

export default BtnHamMenu;
