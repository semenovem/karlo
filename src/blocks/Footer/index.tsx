import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import Column from 'cmp/footer/Column';
import Item from 'cmp/footer/Item';
import Ownership from 'cmp/footer/Ownership';

import * as loc from 'constants/locations';

export interface Props {
  className?: string;
}

function Footer(props: Props): React.ReactElement {
  return (
    <footer className={cn(props.className, css.footer)}>
      <div className={css.nav}>
        <Column className={css.col}>
          <Item className={css.item} onClick={onClick} content={'О Компании'} loc={loc.company} />
          <Item className={css.item} onClick={onClick} content={'Цены'} loc={loc.prices} />
        </Column>

        <Column className={css.col}>
          <Item className={css.item} onClick={onClick} content={'Автопарк'} loc={loc.vehicle} />
          <Item className={css.item} onClick={onClick} content={'Сотрудничество'} loc={loc.b2b} />
        </Column>

        <Column className={css.col}>
          <Item className={css.item} onClick={onClick} content={'Вакансии'} loc={loc.vacancies} />
          <Item className={css.item} onClick={onClick} content={'Контакты'} loc={loc.contacts} />
        </Column>
      </div>

      <Ownership className={css.ownership} />
    </footer>
  );
}

export default Footer;

function onClick() {
  console.log('>>>>>>>>> ');
}
