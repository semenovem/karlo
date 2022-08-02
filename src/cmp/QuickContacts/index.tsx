import React from "react";
import cn from "classnames";

import BtnCross from "cmp/btn/Cross";

import css from "./style.module.css";

export interface Props {
  className?: string;
  title: string;
  children: React.ReactElement[];
  onClose: () => void
}

function Contacts(p: Props): React.ReactElement {
  return (
    <div className={cn(css.panel, p.className)}>
      <div className={css.top}>

        <BtnCross onClick={p.onClose} className={css.cross}/>

        <h5 className={css.title}>{p.title}</h5>
        <div className={css.crossDim}/>
      </div>

      <hr/>

      <div className={css.content}>{p.children}</div>

    </div>
  );
}

export default Contacts;
