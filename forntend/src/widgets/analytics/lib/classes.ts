import { ChartData } from 'chart.js';
import { getOperations, OperationType } from 'shared/api/operation';
import { ID } from 'shared/types';
import { CategoryType } from 'shared/lib/category';
import { ru } from 'date-fns/locale';
import {
	addDays,
	addMonths,
	addWeeks,
	addYears,
	endOfDay,
	endOfMonth,
	endOfWeek,
	endOfYear,
	format,
	getWeek,
	isAfter,
	isBefore,
	startOfDay,
	startOfMonth,
	startOfWeek,
	startOfYear,
	subMonths,
	subWeeks,
	subYears,
} from 'date-fns';

interface TimeRange {
	start: Date;
	end: Date;
}

export abstract class AnalyticsDataGenerator {
	private labels: string[][] = [];
	private incomeData: number[] = [];
	private expenseData: number[] = [];
	
	protected date: Date = new Date();
	protected account: ID | null = null;
	protected totalRange: TimeRange = { start: new Date(), end: new Date() };

	protected abstract getRangeOfStep(date: Date): TimeRange;

	protected abstract getLabelOfStep(date: Date): string[];

	protected abstract getNextDateOfStep(date: Date): Date;

	abstract getRangeLabel(): string;

	abstract getPrevData(): Promise<ChartData<'bar'>>;

	abstract getNextData(): Promise<ChartData<'bar'>>;

	protected setTotalRange(totalRange: TimeRange): this {
		this.totalRange = totalRange;
		return this;
	}

	protected setDate(date: Date): this {
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
		rangeOfStep: TimeRange,
	): OperationType[] {
		return operations?.filter(
			(operation) =>
				isAfter(operation.createdAt, rangeOfStep.start) && isBefore(operation.createdAt, rangeOfStep.end),
		);
	}

	private clear(): this {
		this.labels = [];
		this.incomeData = [];
		this.expenseData = [];

		return this;
	}

	private async fillData(): Promise<void> {
		this.clear();

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

export class WeekDataGenerator extends AnalyticsDataGenerator {
	protected getRangeOfStep(date: Date): { start: Date; end: Date; } {
		return { start: startOfDay(date), end: endOfDay(date) };
	}

	protected getLabelOfStep(date: Date): string[] {
		return [format(date, 'dd.MM.yyyy'), format(date, 'EEEE', { locale: ru })];
	}

	protected getNextDateOfStep(date: Date): Date {
		return addDays(date, 1);
	}

	getRangeLabel(): string {
		return `Неделя ${getWeek(startOfWeek(this.date))}`;
	}

	async getData(): Promise<ChartData<'bar'>> {
		this.setTotalRange({ start: addDays(startOfWeek(this.date), 1), end: addDays(endOfWeek(this.date), 1) });

		return super.getData()
	}

	async getPrevData(): Promise<ChartData<'bar'>> {
		this.setDate(addDays(startOfWeek(subWeeks(this.date, 1)), 1));

		return await this.getData();
	}

	async getNextData(): Promise<ChartData<'bar'>> {
		this.setDate(addDays(startOfWeek(addWeeks(this.date, 1)), 1));

		return await this.getData();
	}
}

export class MonthDataGenerator extends AnalyticsDataGenerator {
	protected getRangeOfStep(date: Date): { start: Date; end: Date; } {
		return { start: startOfDay(date), end: endOfDay(date) };
	}

	protected getLabelOfStep(date: Date): string[] {
		return [format(date, 'dd.MM.yyyy')];
	}

	protected getNextDateOfStep(date: Date): Date {
		return addDays(date, 1);
	}

	getRangeLabel(): string {
		return format(this.date, 'LLLL', { locale: ru });
	}

	async getData(): Promise<ChartData<'bar'>> {
		this.setTotalRange({ start: startOfMonth(this.date), end: endOfMonth(this.date) });

		return super.getData()
	}

	async getPrevData(): Promise<ChartData<'bar'>> {
		this.setDate(startOfMonth(subMonths(this.date, 1)));

		return await this.getData();
	}

	async getNextData(): Promise<ChartData<'bar'>> {
		this.setDate(startOfMonth(addMonths(this.date, 1)));

		return await this.getData();
	}
}

export class YearDataGenerator extends AnalyticsDataGenerator {
	protected getRangeOfStep(date: Date): { start: Date; end: Date; } {
		return { start: startOfMonth(date), end: endOfMonth(date) };
	}

	protected getLabelOfStep(date: Date): string[] {
		return [format(date, 'LLLL', { locale: ru })];
	}

	protected getNextDateOfStep(date: Date): Date {
		return addMonths(date, 1);
	}

	getRangeLabel(): string {
		return format(this.date, 'yyyy');
	}

	async getData(): Promise<ChartData<'bar'>> {
		this.setTotalRange({ start: startOfYear(this.date), end: endOfYear(this.date) });

		return super.getData()
	}

	async getPrevData(): Promise<ChartData<'bar'>> {
		this.setDate(startOfYear(subYears(this.date, 1)));

		return await this.getData();
	}

	async getNextData(): Promise<ChartData<'bar'>> {
		this.setDate(startOfYear(addYears(this.date, 1)));

		return await this.getData();
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
