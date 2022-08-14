import cn from 'classnames';
import React from 'react';

import bgImg from './assets/img.jpg';

import ModContacts from '3-mod/Contacts';
import MapOffice from '3-mod/maps/Office';
import Poster from '5-cmp/Poster';

interface IProps {
  children?: React.ReactElement;
  classname?: string;
}

export default function BlockContacts(p: IProps) {
  return (
    <article className={cn(p.classname)}>
      <Poster bgImg={bgImg} header='КОНТАКТЫ' classname='i-after-poster-bottom' />

      <ModContacts classname='i-mod-top' />

      <MapOffice classname='i-mod-top' />
    </article>
  );
}
