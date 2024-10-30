import { ChartData, ChartOptions } from 'chart.js';
import { addDays, endOfDay, endOfMonth, format, isAfter, isBefore, startOfDay, startOfMonth } from 'date-fns';
import { getOperations, OperationType } from 'shared/api/operation';
import { categoryType } from 'shared/lib/category';
import { ID } from 'shared/types';

export const options: ChartOptions<'bar'> = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Аналитика по счетам',
		},
	},
};

const incomeExpenseSum = (operations: OperationType[]): [number, number] => {
	return operations.reduce(
		(sum, operation) => {
			if (operation.category?.type === categoryType.income) {
				sum[0] += operation.amount;
			} else {
				sum[1] += operation.amount;
			}
			return sum;
		},
		[0, 0],
	);
};

export const getChartData = async (account: ID | null, date: Date): Promise<ChartData<'bar'>> => {
	const labels: string[] = [];
	const incomeData: number[] = [];
	const expenseData: number[] = [];

	const monthStart = startOfMonth(date);
	const monthEnd = endOfMonth(date);

	const response = await getOperations({
		daterange: `${monthStart.toISOString()},${monthEnd.toISOString()}`,
		...(account && { account }),
	});

	const operations = response.pagingData?.items || [];

	let currentDate = monthStart;

	while (isBefore(currentDate, monthEnd)) {
		const startDay = startOfDay(currentDate);
		const endDay = endOfDay(currentDate);

		labels.push(format(currentDate, 'dd.MM.yyyy'));

		const dayOperatins = operations?.filter(
			(operation) => isAfter(operation.createdAt, startDay) && isBefore(operation.createdAt, endDay),
		);

		const incomeExpense = incomeExpenseSum(dayOperatins);

		incomeData.push(incomeExpense[0]);
		expenseData.push(incomeExpense[1]);

		currentDate = addDays(currentDate, 1);
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
