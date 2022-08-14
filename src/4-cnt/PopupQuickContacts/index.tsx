import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import BtnIcon, { kind as btnKind, size as btnSize } from '5-cmp/btn/Btn';
import BtnCross from '5-cmp/btn/Cross';
import Icon, { kind } from '5-cmp/Icon';
import Modal from '5-cmp/Modal';

interface IProps {
  classname?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupQuickContacts(p: IProps) {
  if (!p.isOpen) {
    return null;
  }

  return (
    <Modal classname={cn(css.modal, p.classname)} onClose={p.onClose}>
      <div className={css.top}>
        <BtnCross onClick={p.onClose} className={css.cross} />
        <h5 className={css.title}>Контакты</h5>
        <div className={css.crossDim} />
      </div>

      <hr className={css.sep} />

      <div className={css.content}>
        <Line icon={kind.whatsapp} text='Написать в whatsapp' />
        <Line icon={kind.telegram} text='Написать в telegram' />
        <Line icon={kind.eMailRu} text='Написать письмо' />
      </div>

      <div className={css.bottom}>
        <BtnIcon size={btnSize.xl} kind={btnKind.arrowUp} onClick={p.onClose} ariaLabel='Закрыть' />
      </div>
    </Modal>
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
