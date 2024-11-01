import { ChartData } from 'chart.js';
import { getOperations } from 'shared/api/operation';
import { ID } from 'shared/types';
import { operationsTotalSum } from './operation-total-sum';
import { ChartRangeType } from './chart.types';
import { getTimeRange } from './get-time-range';
import { getColumnLabel } from './get-column-lagel';
import { addDays, addMonths, isAfter, isBefore } from 'date-fns';
import { getRangePart } from './get-range-part';

export const buildChartData = async (
	account: ID | null,
	date: Date,
	rangeType: ChartRangeType,
): Promise<ChartData<'bar'>> => {
	const labels = [];
	const incomeData = [];
	const expenseData = [];

	const timeRange = getTimeRange(date, rangeType);

	const response = await getOperations({
		daterange: `${timeRange.start.toISOString()},${timeRange.end.toISOString()}`,
		...(account && { account }),
	});

	const operations = response.pagingData?.items || [];

	let dateCounter = timeRange.start;

	while (isBefore(dateCounter, timeRange.end)) {
		const partRange = getRangePart(dateCounter, rangeType);

		labels.push(getColumnLabel(dateCounter, rangeType));

		const operationsOfPart = operations?.filter(
			(operation) =>
				isAfter(operation.createdAt, partRange.start) && isBefore(operation.createdAt, partRange.end),
		);

		const incomeExpense = operationsTotalSum(operationsOfPart);

		incomeData.push(incomeExpense.income);
		expenseData.push(incomeExpense.expense);

		if (rangeType === ChartRangeType.year) {
			dateCounter = addMonths(dateCounter, 1);
		} else {
			dateCounter = addDays(dateCounter, 1);
		}
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
