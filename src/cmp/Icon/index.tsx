import React from "react";
import cn from "classnames";

import css from "./style.module.css";

import cross from "assets/icons/cross.svg"
import whatsapp from "assets/icons/whatsapp.svg"
import burger from "assets/icons/3-line.svg"
import arrowUp from "assets/icons/arrow-up.svg"

export enum kind {
  hum = 1,
  whatsapp,
  cross,
  arrowUp,
}

export interface Props {
  className?: string;
  kind: kind;
  render?: (className: string, style: argStyle) => React.ReactElement
}

interface argStyle {
  backgroundImage: string
}

export default function Icon(p: Props) {
  const cls = cn(css.ic, p.className)
  const st = {backgroundImage: "url(" + ki(p.kind) + ")"}

  if (p.render) {
    return p.render(cls, st)
  }

  return (
    <div
      className={cn(css.ic, p.className)}
      style={st}
    />
  )
}

function ki(k: kind): string {
  switch (k) {
    case kind.hum:
      return burger;
    case kind.whatsapp:
      return whatsapp;
    case kind.cross:
      return cross;
    case kind.arrowUp:
      return arrowUp;
  }
  return "";
}
