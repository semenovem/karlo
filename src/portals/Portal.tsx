import React from 'react';
import ReactDOM from 'react-dom';

import { portalDomId } from 'dat/dom-id';

interface IProps {
  children: React.ReactElement;
}

const domNode = document.getElementById(portalDomId);

if (!domNode) {
  throw new Error(`Не определен DOM элемент в дереве HTML "${portalDomId}"`);
}

const Portal = ({ children }: IProps) => ReactDOM.createPortal(children, domNode);

export default Portal;
