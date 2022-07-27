import React from 'react';
import cn from 'classnames';
import BtnHum from 'cmp/BtnHam';

import css from './style.module.css';

export interface Props {
  className?: string;
}


function Header(props: Props): React.ReactElement {

  return (
    <header className={cn (css.header, props.className)}>

      <BtnHum className={css.btnHum} onOpen={console.log} />

      <div>Перевозки</div>

      <div>,,,</div>

    </header>
  );
}

export default Header;
