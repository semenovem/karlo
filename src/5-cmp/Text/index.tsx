import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  classname?: string;
  children?: React.ReactNode;
}

interface IPropsParagraph {
  children: React.ReactNode;
}

export default function TextPanel(p: IProps): React.ReactElement {
  return <div className={cn(css.txt, p.classname)}>{p.children}</div>;
}

export function Paragraph(p: IPropsParagraph): React.ReactElement {
  return <p className={cn('f-main-regular', css.paragraph)}>{p.children}</p>;
}
