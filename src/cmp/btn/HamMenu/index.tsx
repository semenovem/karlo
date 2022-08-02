import React from "react";
import cn from "classnames";

import Icon, {kind} from "../Btn";

import css from "./style.module.css";

export interface Props {
  className?: string;
  onOpen: () => void;
}

const BtnHamMenu: React.FC<Props> = ({className, onOpen}: Props) => (
  <Icon
    onClick={onOpen}
    className={cn(css.btn, className)}
    kind={kind.hum}
    ariaLabel="Открыть меню"
  />
);

export default BtnHamMenu;
