import React from "react";
import cn from "classnames";
import BtnHum from "cmp/btn/HamMenu";
import BtnIcon, { kind as IconKind } from "cmp/btn/Icon";

import css from "./style.module.css";

export interface Props {
  className?: string;
  title: string;
  children: React.ReactElement[];
}

function Contacts(p: Props): React.ReactElement {
  return (
    <section className={cn(css.panel, p.className)}>
      <h5>{p.title}</h5>
      <hr />
      <div className={css.content}>{p.children}</div>
    </section>
  );
}

export default Contacts;
