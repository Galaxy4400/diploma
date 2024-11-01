import { addDays, endOfMonth, endOfWeek, endOfYear, startOfMonth, startOfWeek, startOfYear } from 'date-fns';
import { ChartRangeType } from './chart.types';

export const getTimeRange = (currentDate: Date, rangeType: ChartRangeType) => {
	switch (rangeType) {
		case ChartRangeType.week: {
			return { start: addDays(startOfWeek(currentDate), 1), end: addDays(endOfWeek(currentDate), 1) };
		}
		case ChartRangeType.month: {
			return { start: startOfMonth(currentDate), end: endOfMonth(currentDate) };
		}
		case ChartRangeType.year: {
			return { start: startOfYear(currentDate), end: endOfYear(currentDate) };
		}
	}
};
