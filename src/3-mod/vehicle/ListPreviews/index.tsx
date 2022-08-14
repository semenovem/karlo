import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import Preview from '../Preview';

import { vehicles } from 'dat/vehicles';

interface IProps {
  classname?: string;
}

export default function ListVehicle(p: IProps) {
  return <div className={cn(css.list, p.classname)}>{renderVehicle()}</div>;
}

function renderVehicle() {
  return vehicles.slice(0, 6).map((item, i) => {
    return <Preview classname={css.preview} vehicle={item} key={i} />;
  });
}
