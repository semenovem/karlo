import React from "react";
import cn from "classnames";

import Btn, { kind, size } from "../Btn";

import css from "./style.module.css";

export interface Props {
  className?: string;
  onOpen: () => void;
  size?: size;
}

const BtnHamMenu: React.FC<Props> = (p: Props) => (
  <Btn
    onClick={p.onOpen}
    className={cn(css.btn, p.className)}
    kind={kind.hum}
    {...(p.size && { size: p.size })}
    ariaLabel="Открыть меню"
  />
);

export default BtnHamMenu;
