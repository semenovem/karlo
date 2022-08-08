import React from "react";
import BlockPoster from "cmp/BlockPoster";

import css from "./style.module.css"
import cn from "classnames";

import bgImg from "./assets/img.jpg"

export interface Props {
  children?: React.ReactElement;
}

export default function Company(props: Props) {
  return (
    <div className={cn(css.blk)}>

      <BlockPoster bgImg={bgImg} header="О КОМПАНИИ" />

      постер блока
      <br/>
      постер блока
      <br/>

    </div>
  );
}
