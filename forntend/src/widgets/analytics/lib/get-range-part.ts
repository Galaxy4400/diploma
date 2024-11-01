import { endOfDay, endOfMonth, startOfDay, startOfMonth } from 'date-fns';
import { ChartRangeType } from './chart.types';

export const getRangePart = (date: Date, rangeType: ChartRangeType) => {
	switch (rangeType) {
		case ChartRangeType.week: {
			return { start: startOfDay(date), end: endOfDay(date) };
		}
		case ChartRangeType.month: {
			return { start: startOfDay(date), end: endOfDay(date) };
		}
		case ChartRangeType.year: {
			return { start: startOfMonth(date), end: endOfMonth(date) };
		}
	}
};
