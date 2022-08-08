import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

export interface Props {
  classname?: string;
  children?: React.ReactNode;
}

interface PropsParagraph {
  children: React.ReactNode;
}

export default function Text(p: Props) {
  return <div className={cn(css.txt, p.classname)}>{p.children}</div>;
}

export function Paragraph(p: PropsParagraph) {
  return <p className={cn('f-block-paragraph', css.paragraph)}>{p.children}</p>;
}
