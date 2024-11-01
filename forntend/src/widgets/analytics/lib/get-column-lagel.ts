import { format } from 'date-fns';
import { ChartRangeType } from './chart.types';
import { ru } from 'date-fns/locale';

export const getColumnLabel = (date: Date, rangeType: ChartRangeType) => {
	switch (rangeType) {
		case ChartRangeType.week: {
			return [format(date, 'dd.MM.yyyy'), format(date, 'EEEE', { locale: ru })];
		}
		case ChartRangeType.month: {
			return format(date, 'dd.MM.yyyy');
		}
		case ChartRangeType.year: {
			return format(date, 'LLLL', { locale: ru });
		}
	}
};
