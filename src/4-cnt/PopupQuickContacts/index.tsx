import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import Contacts from '4-cnt/Contacts';
import BtnIcon, { kind as btnKind, size as btnSize } from '5-cmp/btn/Btn';
import BtnCross from '5-cmp/btn/Cross';
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

      <Contacts classname='' />

      <div className={css.bottom}>
        <BtnIcon size={btnSize.xl} kind={btnKind.arrowUp} onClick={p.onClose} ariaLabel='Закрыть' />
      </div>
    </Modal>
  );
}
