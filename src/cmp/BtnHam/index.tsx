import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

export interface Props {
  className?: string;
  onOpen: () => void;
}

const BtnHamMenu: React.FC<Props> = ({ className, onOpen }: Props) => (
  <button
    className={cn(css.btnHam, className)}
    onClick={onOpen}
    type="button"
    aria-label="Open menu"
  />
);

export default BtnHamMenu;
