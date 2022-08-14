import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import mapOfficeStatic from '../assets/map_static_office.jpeg';

interface IProps {
  classname?: string;
}

const idContainer = 'sdfasf343asd';

export default function MapOffice(p: IProps) {
  // useEffect(() => {
  //   console.log('MapOffice - кол-во рендеров', count++);
  // });

  return (
    <div className={cn(css.cont, p.classname)} id={idContainer}>
      <img src={mapOfficeStatic} alt='постер' />
    </div>
  );
}
