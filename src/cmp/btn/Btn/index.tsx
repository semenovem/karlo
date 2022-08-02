import React from "react";
import cn from "classnames";

import css from "./style.module.css";

import Icon, {kind} from "cmp/Icon"

export {
  kind
}

export interface Props {
  className?: string;
  onClick: () => void;
  kind: kind;
  ariaLabel: string;
}

export default function Btn(p: Props) {
  return <Icon
    kind={p.kind}
    className={cn(css.btn, p.className)}
    render={(cls, st) => (
      <button
        className={cn(cls, p.className)}
        onClick={p.onClick}
        type="button"
        aria-label={p.ariaLabel}
        style={st}
      />
    )}/>
}
