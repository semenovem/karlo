import React from "react";
import Modal from "cmp/Modal";
import QuickContacts from "cmp/QuickContacts";

import Icon, {kind} from "cmp/Icon";
import BtnIcon, {kind as btnKind} from "cmp/btn/Btn";

import css from "./style.module.css"

export interface Props {

}

export default function PopupQuickContacts(p: Props) {

  const handleClose = () => {
    console.log(">>>>>>>>>>>>>> close modal .......... ")
  }

  return (
    <Modal classname={css.modal} onClose={handleClose}>
      <QuickContacts title="Контакты" onClose={handleClose}>

        <Line icon={kind.whatsapp} text="Написать в whatsapp"/>
        <Line icon={kind.whatsapp} text="Написать в telegram"/>
        <Line icon={kind.whatsapp} text="Написать письмо"/>

        <div className={css.bottom}>

          <BtnIcon
            kind={btnKind.arrowUp}
            onClick={console.log}
            ariaLabel="Закрыть"
            className={css.up}
          />

        </div>

      </QuickContacts>
    </Modal>
  )
}


function Line(p: any) {
  return (
    <div className={css.line}>
      <Icon kind={p.icon} className={css.ic}/>
      <div className={css.txt}>{p.text}</div>
    </div>
  )
}
