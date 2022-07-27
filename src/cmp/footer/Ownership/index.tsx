import React from "react";
import cn from "classnames";

import css from "./style.module.css"

export interface Props {
  className?: string
}

function Ownership(props: Props): React.ReactElement {
  return <div className={cn(css.item, props.className)}>
    {"© 2014     ИП Глазков"}
  </div>
}

export default Ownership
