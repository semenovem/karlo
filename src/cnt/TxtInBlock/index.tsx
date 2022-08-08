import React from "react";

import css from "./style.module.css";
import cn from "classnames";

export interface Props {
  children?: React.ReactElement;
}

export default function Company(props: Props) {
  return (
    <div className={cn(css.blk)}>

      текст блока
      текст блока
      текст блока

    </div>
  );
}
