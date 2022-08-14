import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';

import Previews from '3-mod/vacancies/Previews';
import Poster from '5-cmp/Poster';
import Text, { Paragraph as P } from '5-cmp/Text';

interface IProps {
  children?: React.ReactElement;
  classname?: string;
}

export default function BlockVacancies(p: IProps) {
  return (
    <article className={cn(p.classname)}>
      <Poster bgImg={bgImg} header='ВАКАНСИИ' classname='i-after-poster-bottom' />

      <Previews />

      <Text classname='i-mod-top'>
        <P>
          Что бы откликнутся, позвоните на номер телефона:
          <br />
          +7 (926) 334-55-66
        </P>
      </Text>
    </article>
  );
}
