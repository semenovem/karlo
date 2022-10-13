import React, { ComponentClass } from 'react';

import ymaps from 'yandex-maps';

import { yaMapDomId } from 'dat/dom-id';

export interface IHocProps {
  geomap: ymaps.Map;
}

interface IState {
  ready: boolean;
}

const apikey = '84e027c9-3de5-4ddd-9063-a6f345a48cf6';
const src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=${apikey}`;

// dom нода где создается карта
let mapElem = document.getElementById(yaMapDomId) as HTMLElement;

let scriptAdded: boolean = false; // Скрипт карт добавлен на страницу
let scriptIsLoaded: boolean = false; // Скрипт карт загружен
let objYaMaps: any; // Объект для работы с картами
let geomap: ymaps.Map; // Объект карты
let numCopies: number = 0; // Кол-во копий экземпляров класса

export function withGeoYaMapCore<T>(Child: React.ComponentType<T>) {
  return class extends React.Component<Omit<T, 'geomap'>, IState> {
    static displayName = `withGeoYaMapCore(${Child.displayName || Child.name})`;
    private isMount: boolean = false;

    constructor(props: T) {
      super(props);

      if (numCopies > 1) {
        // console.warn('Количество экземпляров класса не можеть быть больше 1');
      }

      numCopies++;

      this.state = { ready: scriptIsLoaded };
      this.addHtmlElem();
    }

    componentDidMount = () => {
      this.isMount = true;
    };

    componentWillUnmount = () => {
      this.isMount = false;
      numCopies--;
    };

    render(): React.ReactNode {
      const s = this.state;

      if (!s.ready) {
        return null;
      }

      return <Child {...(this.props as T)} geomap={geomap} />;
    }

    private addHtmlElem() {
      if (scriptAdded || window.ymaps !== undefined) {
        return;
      }

      const elem = document.createElement('script');

      elem.src = src;
      elem.type = 'text/javascript';

      // @ts-ignore
      document.querySelector('head').appendChild(elem);

      scriptAdded = true;

      // TODO обработать ошибку загрузки скрипта карт, например повторить попытку
      elem.addEventListener('load', this.handleScriptLoaded);
    }

    createMap = () => {
      geomap = new objYaMaps.Map(yaMapDomId, {
        center: [55.76, 37.64],
        zoom: 10,
        controls: [],
      });

      // if (this.isMount) {
      //   this.setState({
      //     ready: true,
      //   });
      // }
    };

    handleScriptLoaded = () => {
      scriptIsLoaded = true;

      objYaMaps = window['ymaps'];

      objYaMaps.ready(() => {
        this.createMap();
      });
    };
  };
}
