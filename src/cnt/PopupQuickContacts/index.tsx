import cn from 'classnames';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import css from './style.module.css';

import BtnIcon, { kind as btnKind, size as btnSize } from 'cmp/btn/Btn';
import BtnCross from 'cmp/btn/Cross';
import Icon, { kind } from 'cmp/Icon';
import Modal from 'cmp/Modal';

export interface Props {
  classname?: string;
}

export default function PopupQuickContacts(p: Props) {
  const navigate = useNavigate();

  return (
    <Modal classname={cn(css.modal, p.classname)} onClose={() => navigate(-1)}>
      <div className={css.top}>
        <BtnCross onClick={() => navigate(-1)} className={css.cross} />
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
        <BtnIcon size={btnSize.xl} kind={btnKind.arrowUp} onClick={() => navigate(-1)} ariaLabel='Закрыть' />
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

function onClose() {}
