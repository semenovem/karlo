import a872pa799 from '3-mod/vehicle/assets/preview/a872pa799.jpg';
import b952pb190 from '3-mod/vehicle/assets/preview/b952pb190.jpg';
import c948pp799 from '3-mod/vehicle/assets/preview/c948pp799.jpg';
import k482bm197 from '3-mod/vehicle/assets/preview/k482bm197.jpg';
import k985yt799 from '3-mod/vehicle/assets/preview/k985yt799.jpg';
import n254pb799 from '3-mod/vehicle/assets/preview/n254pb799.jpg';
import n403kb799 from '3-mod/vehicle/assets/preview/n403kb799.jpg';
import o943ck790 from '3-mod/vehicle/assets/preview/o943ck790.jpg';
import x049nn799 from '3-mod/vehicle/assets/preview/x049nn799.jpg';
import x562nn799 from '3-mod/vehicle/assets/preview/x562nn799.jpg';
import y807pp799 from '3-mod/vehicle/assets/preview/y807pp799.jpg';

// Размеры машин
// ГАЗЕЛЬ 2004 -872 - 3.0*1.8*2.0
// СОБОЛЬ 2007- 952 - 2.5*1.8*2.0

// ГАЗЕЛЬ БИЗНЕС 2019 - 254 4.2*2.0*2.0
// ГАЗЕЛЬ БИЗНЕС 2018 - 403 - 4.2*2.0*2.0
// ГАЗЕЛЬ БИЗНЕС 482 - 2010 - 4.2*2.0*2.2
// ГАЗЕЛЬ next- 2021(943 И 985) 4.2*2.0*2.2
// ГАЗЕЛЬ БИЗНЕС- 2022 - 562,807,049,948 . 4.2*2.0*2.2

const cap420_200_200: ICapacity = {
  l: 4.2,
  h: 2,
  w: 2,
};

const cap420_200_220: ICapacity = {
  l: 4.2,
  h: 2,
  w: 2,
};

export interface ICapacity {
  l: number;
  h: number;
  w: number;
}

export interface IVehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  govReqNum: string;
  capacity: ICapacity;
  preview: string;
}

const originalSetVehicles: IVehicle[] = [
  {
    id: 1,
    brand: 'ГАЗЕЛЬ',
    model: '',
    year: 2004,
    govReqNum: 'а872ра799',
    capacity: {
      l: 3.0,
      h: 1.8,
      w: 2.0,
    },
    preview: a872pa799,
  },

  {
    id: 2,
    brand: 'ГАЗЕЛЬ',
    model: '',
    year: 2007,
    govReqNum: 'в952рв190',
    capacity: {
      l: 2.5,
      h: 1.8,
      w: 2.0,
    },
    preview: b952pb190,
  },

  {
    id: 3,
    brand: 'ГАЗЕЛЬ',
    model: '',
    year: 2019,
    govReqNum: 'н254рв799',
    capacity: cap420_200_200,
    preview: n254pb799,
  },

  {
    id: 4,
    brand: 'ГАЗЕЛЬ',
    model: 'Бизнес',
    year: 2018,
    govReqNum: 'н403кв799',
    capacity: cap420_200_200,
    preview: n403kb799,
  },

  {
    id: 5,
    brand: 'ГАЗЕЛЬ',
    model: 'Бизнес',
    year: 2010,
    govReqNum: 'к482вм197',
    capacity: cap420_200_220,
    preview: k482bm197,
  },

  {
    id: 6,
    brand: 'ГАЗЕЛЬ',
    model: 'next',
    year: 2021,
    govReqNum: 'о943ск790',
    capacity: cap420_200_220,
    preview: o943ck790,
  },

  {
    id: 7,
    brand: 'ГАЗЕЛЬ',
    model: 'next',
    year: 2021,
    govReqNum: 'к985ут799',
    capacity: cap420_200_220,
    preview: k985yt799,
  },

  {
    id: 8,
    brand: 'ГАЗЕЛЬ',
    model: 'Бизнес',
    year: 2022,
    govReqNum: 'х562нн799',
    capacity: cap420_200_220,
    preview: x562nn799,
  },

  {
    id: 9,
    brand: 'ГАЗЕЛЬ',
    model: 'Бизнес',
    year: 2022,
    govReqNum: 'у807рр799',
    capacity: cap420_200_220,
    preview: y807pp799,
  },

  {
    id: 10,
    brand: 'ГАЗЕЛЬ',
    model: 'Бизнес',
    year: 2022,
    govReqNum: 'х049нн799',
    capacity: cap420_200_220,
    preview: x049nn799,
  },

  {
    id: 11,
    brand: 'ГАЗЕЛЬ',
    model: 'Бизнес',
    year: 2022,
    govReqNum: 'с948рр799',
    capacity: cap420_200_220,
    preview: c948pp799,
  },
];

export function getModel(car: IVehicle): string {
  return `${car.brand} ${car.model}`;
}

export const vehicles: IVehicle[] = originalSetVehicles.sort((a, b) => {
  if (a.year < b.year) return 1;
  if (a.year > b.year) return -1;
  return 0;
});

export const count = vehicles.length;
