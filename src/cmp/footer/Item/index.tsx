import React from "react";
import cn from "classnames";

import css from "./style.module.css";

export interface Props {
  className?: string;
  content: string;
  onClick: () => any;
}

function FooterItem(props: Props): React.ReactElement {
  return (
    <a className={cn(css.item, props.className)} onClick={props.onClick}>
      {props.content}
    </a>
  );
}

export default FooterItem;
