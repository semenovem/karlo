import React from "react";
import cn from "classnames";
import BtnHum from "cmp/btn/HamMenu";
import BtnIcon, {kind as IconKind} from "cmp/btn/Btn";

import * as loc from "../../../constants/locations"
import css from "./style.module.css";
import {useNavigate} from "react-router-dom";

export interface Props {
  className?: string;
}

function Header(props: Props): React.ReactElement {
  let navigate = useNavigate();

  return (
    <header className={cn(css.header, props.className)}>

      <BtnHum className={css.btnHum} onOpen={() => {
        navigate(loc.hamMenu);
      }}/>

      <div>Грузовые перевозки</div>

      <BtnIcon
        className={css.btnHum}
        kind={IconKind.whatsapp}
        ariaLabel={"Открыть контакты"}
        onClick={() => navigate(loc.quickContacts)}
      />
    </header>
  );
}

export default Header;
