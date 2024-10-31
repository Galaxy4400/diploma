import { ChartData } from 'chart.js';
import { getOperations } from 'shared/api/operation';
import { ID } from 'shared/types';
import { operationsTotalSum } from './operation-total-sum';
import { ChartRangeType } from './chart.types';
import {
	addDays,
	endOfDay,
	endOfMonth,
	endOfWeek,
	endOfYear,
	format,
	isAfter,
	isBefore,
	startOfDay,
	startOfMonth,
	startOfWeek,
	startOfYear,
} from 'date-fns';

const getTimeRange = (currentDate: Date, rangeType: ChartRangeType) => {
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

export const buildChartData = async (
	account: ID | null,
	date: Date,
	rangeType: ChartRangeType,
): Promise<ChartData<'bar'>> => {
	const labels: string[] = [];
	const incomeData: number[] = [];
	const expenseData: number[] = [];

	const timeRange = getTimeRange(date, rangeType);

	const response = await getOperations({
		daterange: `${timeRange.start.toISOString()},${timeRange.end.toISOString()}`,
		...(account && { account }),
	});

	const operations = response.pagingData?.items || [];

	let dateCounter = timeRange.start;

	while (isBefore(dateCounter, timeRange.end)) {
		const startDay = startOfDay(dateCounter);
		const endDay = endOfDay(dateCounter);

		labels.push(format(dateCounter, 'dd.MM.yyyy'));

		const dayOperatins = operations?.filter(
			(operation) => isAfter(operation.createdAt, startDay) && isBefore(operation.createdAt, endDay),
		);

		const incomeExpense = operationsTotalSum(dayOperatins);

		incomeData.push(incomeExpense.income);
		expenseData.push(incomeExpense.expense);

		dateCounter = addDays(dateCounter, 1);
	}

	return {
		labels: labels,
		datasets: [
			{
				label: 'Доход',
				data: incomeData,
				backgroundColor: 'rgba(49, 198, 118, 0.5)',
			},
			{
				label: 'Расход',
				data: expenseData,
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};
};
