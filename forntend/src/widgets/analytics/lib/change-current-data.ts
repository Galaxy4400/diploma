import {
	addMonths,
	addWeeks,
	addYears,
	startOfMonth,
	startOfWeek,
	startOfYear,
	subMonths,
	subWeeks,
	subYears,
} from 'date-fns';
import { ChartRangeType } from './chart.types';

export const changeCurrentData = (date: Date, rangeType: ChartRangeType, operationType: 'add' | 'sub') => {
	switch (rangeType) {
		case ChartRangeType.week: {
			return operationType === 'add' ? startOfWeek(addWeeks(date, 1)) : startOfWeek(subWeeks(date, 1));
		}
		case ChartRangeType.month: {
			return operationType === 'add' ? startOfMonth(addMonths(date, 1)) : startOfMonth(subMonths(date, 1));
		}
		case ChartRangeType.year: {
			return operationType === 'add' ? startOfYear(addYears(date, 1)) : startOfYear(subYears(date, 1));
		}
	}
};
