import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import mapOfficeStatic from '../assets/map_static_office.jpeg';
import MapCore from '../Core';

interface IProps {
  classname?: string;
}

export default function MapOffice(p: IProps) {
  return (
    <div className={cn(css.cont, p.classname)}>
      <MapCore>
        <img src={mapOfficeStatic} alt='постер' />
      </MapCore>
    </div>
  );
}
