import React from "react";
import cn from "classnames"

import css from "./style.module.css"

export interface Props {
  classname?: string
  children?: React.ReactElement[] | React.ReactElement
  onClose: () => void
}


export default class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {date: new Date()};
  }

  private handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    this.props.onClose()
  }

  render() {
    const p = this.props

    return (
      <dialog className={cn("g-splash-screen", css.modal)} open>
        <div className={cn("g-splash-screen", css.overlay)} onClick={this.handleOverlayClick}/>

        <div className={cn(css.content, p.classname)} onClick={this.handleOverlayClick}>
          {p.children}
        </div>
      </dialog>
    )
  }
}
