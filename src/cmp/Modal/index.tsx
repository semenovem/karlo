import React from "react";
import cn from "classnames"

import css from "./style.module.css"

export interface Props {
  classname?: string
  children?: React.ReactElement
  onClose: () => void
}


export default class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {date: new Date()};
  }

  private handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e)
  }

  render() {
    const p = this.props

    return (
      <dialog className={css.modal} onClick={this.handleOverlayClick} open>
        <div className={cn(css.pos, css.content, p.classname)}>
          {p.children}
        </div>

        <div className={cn(css.pos, css.overlay)}/>
      </dialog>
    )
  }
}
