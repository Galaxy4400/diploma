import { PriceType } from '@/shared/types';

export const priceFormat = (number: number): PriceType => {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
	}).format(number) as PriceType;
};
