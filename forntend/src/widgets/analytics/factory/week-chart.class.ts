import { ID } from 'shared/types';
import { OperationsService } from './operations-service';
import { ChartData } from 'chart.js';
import { addDays, endOfDay, endOfWeek, format, isAfter, isBefore, startOfDay, startOfWeek } from 'date-fns';
import { OperationType } from 'shared/api/operation';
import { CategoryType } from 'shared/lib/category';

export class WeekChart {
	private operationsService: OperationsService;

	private currentDate: Date;

	constructor(currentData: Date) {
		this.operationsService = new OperationsService();
		this.currentDate = currentData;
	}

	private operationsTotalSum(operations: OperationType[]): { income: number; expense: number } {
		return operations.reduce(
			(sum, operation) => {
				if (operation.category?.type === CategoryType.income) {
					sum.income += operation.amount;
				} else {
					sum.expense += operation.amount;
				}
				return sum;
			},
			{ income: 0, expense: 0 },
		);
	}

	private getTimeRange() {
		return { start: startOfDay(startOfWeek(this.currentDate)), end: endOfDay(endOfWeek(this.currentDate)) };
	}

	private getLabels() {
		const labels = [];

		const timeRange = this.getTimeRange();

		let dateCounter = timeRange.start;

		while (isBefore(dateCounter, timeRange.end)) {
			labels.push(format(dateCounter, 'dd.MM.yyyy'));
		}

		return labels;
	}

	private getDatasetDate(operations: OperationType[]): { incomeData: number[]; expenseData: number[] } {
		const incomeData = [];
		const expenseData = [];

		const timeRange = this.getTimeRange();

		let dateCounter = timeRange.start;

		while (isBefore(dateCounter, timeRange.end)) {
			const startDay = startOfDay(dateCounter);
			const endDay = endOfDay(dateCounter);

			const operatinsPart = operations?.filter(
				(operation) => isAfter(operation.createdAt, startDay) && isBefore(operation.createdAt, endDay),
			);

			const incomeExpense = this.operationsTotalSum(operatinsPart);

			incomeData.push(incomeExpense.income);
			expenseData.push(incomeExpense.expense);

			dateCounter = addDays(dateCounter, 1);
		}

		return { incomeData, expenseData };
	}

	private async getOperations(account: ID | null = null): Promise<OperationType[]> {
		return await this.operationsService.fetchOperations(this.getTimeRange(), account);
	}

	async getData(account: ID | null = null): Promise<ChartData<'bar'>> {
		const operations = await this.getOperations(account);

		const datasetData = this.getDatasetDate(operations);

		return {
			labels: this.getLabels(),
			datasets: [
				{
					label: 'Доход',
					data: datasetData.incomeData,
					backgroundColor: 'rgba(49, 198, 118, 0.5)',
				},
				{
					label: 'Расход',
					data: datasetData.expenseData,
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
				},
			],
		};
	}
}
