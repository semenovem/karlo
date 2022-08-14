import React from 'react';
import ReactDOM from 'react-dom';

import { portal } from 'dat/dom-id';

interface IProps {
  children: React.ReactElement;
}

const domNode = document.getElementById(portal);

if (!domNode) {
  throw new Error(`Не определен DOM элемент в дереве HTML "${portal}"`);
}

const Portal = ({ children }: IProps) => ReactDOM.createPortal(children, domNode);

export default Portal;
