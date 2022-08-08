import React from "react";

import css from "./style.module.css"
import cn from "classnames";

export interface Props {
  children?: React.ReactElement;
  bgImg?: string;
  header: string;
  title?: string;
}

export default function BlockPoster(p: Props) {

  const st: React.CSSProperties = {backgroundImage: "url(" + p.bgImg + ")"}

  return (
    <div className={cn(css.blk)} style={st}>
      <div className={css.bg}></div>
      <div className={css.title}>
        {p.header}
      </div>
    </div>
  );
}
