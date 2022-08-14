import { Location, NavigateFunction } from 'react-router-dom';

export const basePath = '/';
export const main = 'main';
export const contacts = 'contacts';
export const prices = 'prices';
export const company = 'about-company';
export const vehicle = 'vehicle';
export const b2b = 'b2b';
export const vacancies = 'vacancies';

export const hamMenu = 'ham-menu';
export const quickContacts = 'quick-contacts';

const regQuickContacts = new RegExp(quickContacts, 'i');

export function path(p: string): string {
  return basePath + p;
}

export function toQuickContacts(navigate: NavigateFunction, location: Location) {
  if (isQuickContacts(location.pathname)) {
    return;
  }

  if (location.pathname.length === 0 || location.pathname === '/') {
    navigate(quickContacts);
    return;
  }
  navigate(location.pathname + '/' + quickContacts);
}

export function isQuickContacts(path: string): boolean {
  return regQuickContacts.test(path);
}
