import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import img from 'assets/contacts-us.jpg';

interface IProps {
  classname?: string;
}

export default function ContactUs(p: IProps) {
  return (
    <div className={cn(css.contUs, p.classname)}>
      <img src={img} className={css.img} alt='Свяжитесь с нами' />
      <span className={cn('f-banner-1', css.txt)}>Свяжитесь с нами</span>
    </div>
  );
}
