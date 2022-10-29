// Телефон на главной
const _phoneMain = '7 926 334 55 88';

const phoneMainHard = _phoneMain.replace(/\D/g, '');

export const phoneMainPretty = phoneMainHard.replace(/^(\d)(\d\d\d)(\d\d\d)(\d\d)(\d\d)/, '+$1 $2 $3 $4$5');

export const phoneHRPretty = phoneMainPretty;

export const emailb2b = 'info@glazkoff.ru';
