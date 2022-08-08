import cn from 'classnames';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import css from './style.module.css';

import Btn, { kind as icKind, size as icSize } from 'cmp/btn/Btn';
import BtnHum from 'cmp/btn/HamMenu';

import * as loc from 'constants/locations';

export interface Props {
  className?: string;
}

function Header(props: Props): React.ReactElement {
  let navigate = useNavigate();

  return (
    <header className={cn(css.header, props.className)}>
      <BtnHum
        className={css.btnHum}
        size={icSize.xl}
        onOpen={() => {
          navigate(loc.hamMenu);
        }}
      />

      <h1 className={'f-header-title'}>Грузовые перевозки</h1>

      <Btn
        className={css.btnHum}
        kind={icKind.whatsapp}
        size={icSize.xl}
        ariaLabel={'Открыть контакты'}
        onClick={() => navigate(loc.quickContacts)}
      />
    </header>
  );
}

export default Header;
