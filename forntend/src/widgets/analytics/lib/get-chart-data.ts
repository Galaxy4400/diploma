import { ChartData } from 'chart.js';
import { addDays, endOfDay, format, isAfter, isBefore, startOfDay, subMonths } from 'date-fns';
import { getOperations, OperationType } from 'shared/api/operation';
import { categoryType } from 'shared/lib/category';
import { ID } from 'shared/types';

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

export const getChartData = async (account: ID | null): Promise<ChartData<'bar'>> => {
	const dateNow = new Date().toISOString();
	const dateOneMonthAgo = startOfDay(subMonths(new Date(), 1)).toISOString();

	const response = await getOperations({
		daterange: `${dateOneMonthAgo},${dateNow}`,
		...(account && { account }),
	});

	const operations = response.pagingData?.items || [];

	const labels: string[] = [];
	const incomeData: number[] = [];
	const expenseData: number[] = [];

	let currentDate = dateOneMonthAgo;

	while (isBefore(currentDate, dateNow)) {
		const startDay = startOfDay(currentDate).toISOString();
		const endDay = endOfDay(currentDate).toISOString();

		labels.push(format(currentDate, 'dd.MM.yyyy'));

		const dayOperatins = operations?.filter(
			(operation) => isAfter(operation.createdAt, startDay) && isBefore(operation.createdAt, endDay),
		);

		const incomeExpense = incomeExpenseSum(dayOperatins);

		incomeData.push(incomeExpense[0]);
		expenseData.push(incomeExpense[1]);

		currentDate = addDays(currentDate, 1).toISOString();
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
