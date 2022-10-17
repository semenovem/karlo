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
    title: 'Водитель-экспедитор',
    responsibilities: 'Доставка и экспедиция грузов и сопровождение документов',
    requirements: 'В/у катериии В, стаж от 3-x лет, регистрация Москва/Московская область',
    description: '',
    terms: '',
  },
  {
    id: 2,
    title: 'Грузчик-сборщик мебели',
    responsibilities: 'Доставка, подъем и сборка мебели на дому',
    requirements: 'Опыт работы от 2-х лет, регистрация Москва/Московская область',
    description: '',
    terms: '',
  },
  {
    id: 3,
    title: 'Сборщик мебели',
    responsibilities: 'Сборка корпуской и мягкой мебели',
    requirements: 'Опыт работы от 2-х лет, регистрация Москва/Московская область',
    description: '',
    terms: '',
  },
];
