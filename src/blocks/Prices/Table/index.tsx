import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

export interface Props {
  children?: React.ReactElement;
  classname?: string;
}

export default function PriceTable(p: Props) {
  return (
    <table className={cn(css.table, p.classname)}>
      <tr>
        <td>по Москве</td>
        <td>1 000</td>
        <td>р/час</td>
      </tr>
      <tr className={css.additional}>
        <td>в центр </td>
        <td>+ 1 000</td>
        <td>р/час</td>
      </tr>

      <tr>
        <td>по МО</td>
        <td>2 000</td>
        <td>р/час</td>
      </tr>
      <tr>
        <td>услуги грузчика</td>
        <td>600</td>
        <td>р/час</td>
      </tr>
      <tr>
        <td>экспедиторские услуги</td>
        <td>600</td>
        <td>р/час</td>
      </tr>
    </table>
  );
}
