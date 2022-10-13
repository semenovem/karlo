import cn from 'classnames';
import React from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import css from './style.module.css';

import Btn, { kind as icKind, size as icSize } from '5-cmp/btn/Btn';
import BtnHum from '5-cmp/btn/HamMenu';

import * as loc from 'dat/locations';

export interface IProps {
  className?: string;
}

export default function BlockHeader(p: IProps): React.ReactElement {
  const navigate = useNavigate();
  const curLocation = useLocation();

  return (
    <header className={cn(css.header, p.className)}>
      <BtnHum
        className={css.btnHum}
        size={icSize.xl}
        onOpen={() => {
          navigate(loc.hamMenu);
        }}
      />

      <Link to={loc.path(loc.main)} className='g-link-clear-style'>
        <h1 className={cn('f-header-title', css.title)}>Грузовые перевозки</h1>
      </Link>

      <Btn
        className={css.btnHum}
        kind={icKind.whatsapp}
        size={icSize.xl}
        ariaLabel='Открыть контакты'
        onClick={() => loc.toQuickContacts(navigate, curLocation)}
      />
    </header>
  );
}
