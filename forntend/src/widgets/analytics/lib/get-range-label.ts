import { format } from 'date-fns';
import { ChartRangeType } from './chart.types';
import { getWeekName } from './get-week-name';
import { ru } from 'date-fns/locale';

export const getRangeLabel = (currentDate: Date, rangeType: ChartRangeType) => {
	switch (rangeType) {
		case ChartRangeType.week: {
			return getWeekName(currentDate);
		}
		case ChartRangeType.month: {
			return format(currentDate, 'LLLL', { locale: ru });
		}
		case ChartRangeType.year: {
			return format(currentDate, 'yyyy');
		}
	}
};
