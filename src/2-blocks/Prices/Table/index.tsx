import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

interface IProps {
  children?: React.ReactElement;
  classname?: string;
}

export default function PriceTable(p: IProps) {
  return (
    <table className={cn(css.table, p.classname)}>
      <tbody>
        <tr>
          <td>по Москве</td>
          <td>1 000</td>
          <td>р/час</td>
        </tr>
        <tr className={css.additional}>
          <td>в центр</td>
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
        <tr>
          <td>типы: почасовая</td>
          <td>600</td>
          <td>р/час</td>
        </tr>
        <tr>
          <td>типы: за подачу + за каждую точку</td>
          <td>
            7000руб за подачу
            <br />
            каждая точка: 1000руб
            <br />
          </td>
          <td> р/час. ограничения: до 200км, по времени: 8часов</td>
        </tr>
      </tbody>
    </table>
  );
}
