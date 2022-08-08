import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import Portal from 'portals/Portal';

export interface Props {
  classname?: string;
  children?: React.ReactElement[] | React.ReactElement;
  onClose: () => void;
}

export default class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    const p = this.props;

    return (
      <Portal>
        <dialog className={cn('g-splash-screen', css.modal)} open>
          <div className={cn('g-splash-screen', css.overlay)} onClick={this.handleOverlayClick} />

          <div className={cn(css.content, p.classname)} onClick={this.handleOverlayClick}>
            {p.children}
          </div>
        </dialog>
      </Portal>
    );
  }

  private handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    this.props.onClose();
  };
}
