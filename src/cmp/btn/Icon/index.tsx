import React from "react";
import cn from "classnames";

import css from "./style.module.css";

export enum kind {
  hum = 1,
  whatsapp,
}

export interface Props {
  className?: string;
  onOpen: () => void;
  kind: kind;
  ariaLabel: string;
}

const BtnHamMenu: React.FC<Props> = (p: Props) => (
  <button
    className={cn(css.btn, p.className, ki(p.kind))}
    onClick={p.onOpen}
    type="button"
    aria-label={p.ariaLabel}
  />
);

export default BtnHamMenu;

function ki(k: kind): string {
  switch (k) {
    case kind.hum:
      return css.ham;
    case kind.whatsapp:
      return css.whatsapp;
  }
  return "";
}
