import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import burger from 'assets/icons/3-line.svg';
import arrowUp from 'assets/icons/arrow-up.svg';
import cross from 'assets/icons/cross.svg';
import eMailRu from 'assets/icons/email-mail.ru.svg';
import msgTelegram from 'assets/icons/msg-telegram.svg';
import whatsapp from 'assets/icons/whatsapp.svg';

export enum kind {
  hum = 1,
  cross,
  whatsapp,
  telegram,
  eMailRu,
  arrowUp,
}

export enum size {
  s = -1,
  m = -2,
  l = -3,
  xl = -4,
}

export interface Props {
  className?: string;
  kind: kind;
  size?: size | number;
  render?: (className: string, style: React.CSSProperties) => React.ReactElement;
}

export default function Icon(p: Props) {
  const cls = cn(css.ic, p.className, si(p.size));
  const st: React.CSSProperties = { backgroundImage: 'url(' + ki(p.kind) + ')' };

  if (typeof p.size === 'number' && p.size > 0) {
    st.width = `${p.size}px`;
    st.height = `${p.size}px`;
  }

  if (p.render) {
    return p.render(cls, st);
  }

  return <div className={cls} style={st} />;
}

function si(s: size | undefined): string {
  switch (s) {
    case size.s:
      return css.small;
    case size.m:
      return css.medium;
    case size.l:
      return css.large;
    case size.xl:
      return css.xl;
  }
  return '';
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
    case kind.telegram:
      return msgTelegram;
    case kind.eMailRu:
      return eMailRu;
  }
  return '';
}
