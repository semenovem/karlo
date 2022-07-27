import React from "react";
import cn from "classnames";
import BtnHum from "cmp/btn/HamMenu";
import BtnIcon, { kind as IconKind } from "cmp/btn/Icon";

import css from "./style.module.css";

export interface Props {
  className?: string;
}

function Header(props: Props): React.ReactElement {
  return (
    <header className={cn(css.header, props.className)}>
      <BtnHum className={css.btnHum} onOpen={console.log} />
      <div>Грузовые перевозки</div>
      <BtnIcon
        className={css.btnHum}
        onOpen={console.log}
        kind={IconKind.whatsapp}
        ariaLabel={"Открыть контакты"}
      />
    </header>
  );
}

export default Header;
