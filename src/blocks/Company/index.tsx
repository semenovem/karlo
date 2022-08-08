import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';
import css from './style.module.css';

import Text, { Paragraph } from 'cmp/block/Text';
import BlockPoster from 'cmp/BlockPoster';

export interface Props {
  children?: React.ReactElement;
  classname?: string;
}

export default function Company(p: Props) {
  return (
    <article className={cn(css.blk, p.classname)}>
      <BlockPoster bgImg={bgImg} header='О КОМПАНИИ' />

      <Text>
        <Paragraph>Параграф 1</Paragraph>

        <Paragraph>Параграф 2</Paragraph>
      </Text>
      <br />
    </article>
  );
}
