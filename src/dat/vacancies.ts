export interface IVacancy {
  id: number;
  title: string; // Должность
  responsibilities: string; // Обязанности
  requirements: string; // Требования
  description: string; // Описание
  terms: string; // Условия
}

export const vacancies: IVacancy[] = [
  {
    id: 1,
    title: 'Водитель',
    responsibilities: 'Доставка товаров по Москве и области',
    requirements: 'В/у В, стаж от 10 лет',
    description: '',
    terms: '',
  },
  {
    id: 2,
    title: 'Сборщик',
    responsibilities: 'Сборка корпуской и мягкой мебели',
    requirements: 'Опыт работы от 2-х лет',
    description: '',
    terms: '',
  },
  {
    id: 3,
    title: 'Грузчик',
    responsibilities: 'Разгрузка корпусной и мягкой мебели',
    requirements: 'Опыт работы от 2-х лет',
    description: 'Подъем на этаж и тд',
    terms: '',
  },
];
