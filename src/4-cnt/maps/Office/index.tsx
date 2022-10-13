import cn from 'classnames';
import React from 'react';

import ymaps from 'yandex-maps';

import css from './style.module.css';

import { IHocProps, withGeoYaMapCore } from 'sys/GeoYaMapCore';

interface IProps {
  classname?: string;
  geomap: ymaps.Map;
  idElemContainer?: string; // id dom элемента-контейнера для карты
}

const id = 'id-map';

function CmpMapOffice({ geomap, classname }: IProps) {
  geomap?.container.fitToViewport();

  console.log('>>>>>>>> ', geomap);

  return <div className={cn(css.cont, classname)} id={id}></div>;
}

function mapRender(map: ymaps.Map) {
  console.log('!!!');
}

const MapOffice = withGeoYaMapCore<IProps>(CmpMapOffice);
export default MapOffice;
