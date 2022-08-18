import React from 'react';

interface IProps {
  children: React.ReactNode;
}

interface IState {
  ready: boolean;
}

const src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=84e027c9-3de5-4ddd-9063-a6f345a48cf6';

// <script async src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=84e027c9-3de5-4ddd-9063-a6f345a48cf6" type="text/javascript"></script>

export default class MapCore extends React.Component<IProps, IState> {
  static scriptAdded: boolean = false; // Скрипт карт добавлен на страницу
  static scriptIsLoaded: boolean = false; // Скрипт карт загружен

  private isMount: boolean = false;

  constructor(props: IProps) {
    super(props);

    this.state = { ready: MapCore.scriptIsLoaded };

    // запустить загрузку скриптов карт
    this.addHtmlElem();
  }

  componentDidMount() {
    this.isMount = true;
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  render(): React.ReactNode {
    const p = this.props;
    const s = this.state;

    if (!s.ready) {
      return null;
    }

    return p.children;
  }

  private addHtmlElem() {
    // @ts-ignore
    if (MapCore.scriptAdded || window.ymaps !== undefined) {
      return;
    }

    const elem = document.createElement('script');

    elem.src = src;
    elem.type = 'text/javascript';

    // @ts-ignore
    document.querySelector('head').appendChild(elem);

    MapCore.scriptAdded = true;

    // TODO обработать ошибку загрузки скрипта карт, например повторить попытку
    elem.addEventListener('load', this.handleScriptLoaded.bind(this));
  }

  private handleScriptLoaded(arg: any) {
    MapCore.scriptIsLoaded = true;

    if (this.isMount) {
      this.setState({
        ready: true,
      });
    }
  }
}
