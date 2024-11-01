import { endOfMonth, endOfWeek, endOfYear, startOfMonth, startOfWeek, startOfYear } from 'date-fns';
import { ChartRangeType } from './chart.types';

export const getTimeRange = (currentDate: Date, rangeType: ChartRangeType) => {
	switch (rangeType) {
		case ChartRangeType.week: {
			return { start: startOfWeek(currentDate), end: endOfWeek(currentDate) };
		}
		case ChartRangeType.month: {
			return { start: startOfMonth(currentDate), end: endOfMonth(currentDate) };
		}
		case ChartRangeType.year: {
			return { start: startOfYear(currentDate), end: endOfYear(currentDate) };
		}
	}
};
