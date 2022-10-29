import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import Icon, { kind, size as btnSize } from '5-cmp/Icon';

import { phoneMainPretty } from 'dat/contacts';

interface IProps {
  classname?: string;
}

export default function ModContacts(p: IProps) {
  return (
    <div className={cn(css.content, p.classname)}>
      <Line icon={kind.call} text={phoneMainPretty} />
      <Line icon={kind.whatsapp} text='Написать в whatsapp' />
      <Line icon={kind.telegram} text='Написать в telegram' />
      <Line icon={kind.eMailRu} text='Написать письмо' />
    </div>
  );
}

function Line(p: any) {
  return (
    <div className={css.line}>
      <Icon kind={p.icon} className={css.ic} size={btnSize.xl} />
      <div className={cn('f-quick-contacts', css.txt)}>{p.text}</div>
    </div>
  );
}
