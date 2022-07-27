import React from "react";
import ReactDOM from "react-dom";
import {hamMenu} from "constants/dom-id";

interface Props {
  children: React.ReactElement;
}

const domNode = document.getElementById(hamMenu);

if (!domNode) {
  throw new Error(`Не определен DOM элемент в дереве HTML "${hamMenu}"`);
}

const Top = ({children}: Props) => ReactDOM.createPortal(children, domNode);

export default Top;
