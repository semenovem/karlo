import cn from 'classnames';
import React from 'react';

import css from './style.module.css';

import Column from '5-cmp/footer/Column';
import Ownership from '5-cmp/footer/Ownership';
import Item from '5-cmp/NavLink';

import * as loc from 'dat/locations';

interface IProps {
  className?: string;
}

export default function BlockFooter(props: IProps): React.ReactElement {
  return (
    <footer className={cn(props.className, css.footer)}>
      <div className={css.nav}>
        <Column className={css.col}>
          <Item className={css.item} content={'О Компании'} goTo={loc.company} />
          <Item className={css.item} content={'Цены'} goTo={loc.prices} />
        </Column>

        <Column className={css.col}>
          <Item className={css.item} content={'Автопарк'} goTo={loc.vehicle} />
          <Item className={css.item} content={'Сотрудничество'} goTo={loc.b2b} />
        </Column>

        <Column className={css.col}>
          <Item className={css.item} content={'Вакансии'} goTo={loc.vacancies} />
          <Item className={css.item} content={'Контакты'} goTo={loc.contacts} />
        </Column>
      </div>

      <Ownership className={css.ownership} />
    </footer>
  );
}
