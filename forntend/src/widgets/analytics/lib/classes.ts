import { ChartData } from 'chart.js';
import { getOperations, OperationType } from 'shared/api/operation';
import { ID } from 'shared/types';
import { CategoryType } from 'shared/lib/category';
import { ru } from 'date-fns/locale';
import {
	addDays,
	addMonths,
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

abstract class AnalyticsDataGenerator {
	protected date: Date = new Date();
	protected account: ID | null = null;

	protected labels: string[][] = [];
	protected incomeData: number[] = [];
	protected expenseData: number[] = [];

	protected abstract totalRange: { start: Date; end: Date };

	protected abstract getRangeOfStep(date: Date): { start: Date; end: Date };

	protected abstract getLabelOfStep(date: Date): string[];

	protected abstract getNextDateOfStep(date: Date): Date;

	setDate(date: Date): this {
		this.date = date;
		return this;
	}

	setAccount(account: ID | null): this {
		this.account = account;
		return this;
	}

	private operationsTotalSum = (operations: OperationType[]) => {
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
	};

	private async getOperations(): Promise<OperationType[]> {
		try {
			const { pagingData } = await getOperations({
				daterange: `${this.totalRange.start.toISOString()},${this.totalRange.end.toISOString()}`,
				...(this.account && { account: this.account }),
			});

			return pagingData?.items || [];
		} catch (error) {
			throw new Error(error as string);
		}
	}
	

	private findOperationsOfStep(
		operations: OperationType[],
		rangeOfStep: { start: Date; end: Date },
	): OperationType[] {
		return operations?.filter(
			(operation) =>
				isAfter(operation.createdAt, rangeOfStep.start) && isBefore(operation.createdAt, rangeOfStep.end),
		);
	}

	private async fillData(): Promise<void> {
		const operations = await this.getOperations();

		let startDateOfStep = this.totalRange.start;

		while (isBefore(startDateOfStep, this.totalRange.end)) {
			const rangeOfStep = this.getRangeOfStep(startDateOfStep);

			const operationsOfStep = this.findOperationsOfStep(operations, rangeOfStep);

			const operationsTotalSum = this.operationsTotalSum(operationsOfStep);

			this.labels.push(this.getLabelOfStep(startDateOfStep));
			this.incomeData.push(operationsTotalSum.income);
			this.expenseData.push(operationsTotalSum.expense);

			startDateOfStep = this.getNextDateOfStep(startDateOfStep);
		}
	}

	async getData(): Promise<ChartData<'bar'>> {
		await this.fillData();

		return {
			labels: this.labels,
			datasets: [
				{
					label: 'Доход',
					data: this.incomeData,
					backgroundColor: 'rgba(49, 198, 118, 0.5)',
				},
				{
					label: 'Расход',
					data: this.expenseData,
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
				},
			],
		};
	}
}

class WeekDataGenerator extends AnalyticsDataGenerator {
	protected totalRange = { start: addDays(startOfWeek(new Date()), 1), end: addDays(endOfWeek(new Date()), 1) };

	protected getRangeOfStep(date: Date): { start: Date; end: Date; } {
		return { start: startOfDay(date), end: endOfDay(date) };
	}

	protected getLabelOfStep(date: Date): string[] {
		return [format(date, 'dd.MM.yyyy'), format(date, 'EEEE', { locale: ru })];
	}

	protected getNextDateOfStep(date: Date): Date {
		return addDays(date, 1);
	}
}

class MonthDataGenerator extends AnalyticsDataGenerator {
	protected totalRange = { start: startOfMonth(new Date()), end: endOfMonth(new Date()) };

	protected getRangeOfStep(date: Date): { start: Date; end: Date; } {
		return { start: startOfDay(date), end: endOfDay(date) };
	}

	protected getLabelOfStep(date: Date): string[] {
		return [format(date, 'dd.MM.yyyy')];
	}

	protected getNextDateOfStep(date: Date): Date {
		return addDays(date, 1);
	}
}

class YearDataGenerator extends AnalyticsDataGenerator {
	protected totalRange = { start: startOfYear(new Date()), end: endOfYear(new Date()) };

	protected getRangeOfStep(date: Date): { start: Date; end: Date; } {
		return { start: startOfMonth(date), end: endOfMonth(date) };
	}

	protected getLabelOfStep(date: Date): string[] {
		return [format(date, 'LLLL', { locale: ru })];
	}

	protected getNextDateOfStep(date: Date): Date {
		return addMonths(date, 1);
	}
}

export class DataGeneratorFactory {
	static create(type: 'week' | 'month' | 'year'): AnalyticsDataGenerator {
		switch (type) {
			case 'week':
				return new WeekDataGenerator();
			case 'month':
				return new MonthDataGenerator();
			case 'year':
				return new YearDataGenerator();
			default:
				throw new Error('Unknown data generator type');
		}
	}
}
