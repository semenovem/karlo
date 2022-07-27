import React from 'react';
import cn from 'classnames';

import Item from "cmp/footer/Item"
import Column from "cmp/footer/Column"
import Ownership from "cmp/footer/Ownership"

import css from './style.module.css';

export interface Props {
  className?: string;
}


function Footer(props: Props): React.ReactElement {
  return (
    <footer className={cn(props.className, css.footer)}>

      <div className={css.nav}>
        <Column className={css.col}>
          <Item className={css.item} onClick={onClick} content={"О Компании"}/>
          <Item className={css.item} onClick={onClick} content={"Цены"}/>
        </Column>

        <Column className={css.col}>
          <Item className={css.item} onClick={onClick} content={"Автопарк"}/>
          <Item className={css.item} onClick={onClick} content={"Сотрудничество"}/>
        </Column>

        <Column className={css.col}>
          <Item className={css.item} onClick={onClick} content={"Вакансии"}/>
          <Item className={css.item} onClick={onClick} content={"Контакты"}/>
        </Column>
      </div>

      <Ownership className={css.ownership}/>

    </footer>
  );
}

export default Footer;

function onClick() {
  console.log(">>>>>>>>> ")
}
