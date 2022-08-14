import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import { IVehicle, getModel } from 'dat/vehicles';

interface IProps {
  classname?: string;
  vehicle: IVehicle;
}

export default function Preview(p: IProps) {
  return (
    <a className={cn(css.preview, p.classname)} onClick={() => onCLick(p.vehicle.id)}>
      <img src={p.vehicle.preview} className={css.img} />
      <div className={css.note}>
        <div className={css.model}>{getModel(p.vehicle)}</div>
        <div className={css.year}>{p.vehicle.year}</div>
      </div>
    </a>
  );
}

function onCLick(id: number) {
  console.log('>>>>>>>>>> ', id);
}
