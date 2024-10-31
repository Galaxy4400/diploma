import { ChartData } from 'chart.js';

export interface Chart {
	labels: string[];
	incomeData: number[];
	expenseData: number[];

	getData(): ChartData<'bar'>;

	prev(): void;

	next(): void;
}
