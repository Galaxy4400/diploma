import { ChartData } from 'chart.js';
import { ru } from 'date-fns/locale';
import { AnalyticsDataGenerator } from './analytics-data-generator';
import { addDays, addWeeks, endOfDay, endOfWeek, format, startOfDay, startOfWeek, subWeeks } from 'date-fns';
import { TimeRange } from '../types';

export class WeekDataGenerator extends AnalyticsDataGenerator {
	protected getRangeOfStep(date: Date): TimeRange {
		return { start: startOfDay(date), end: endOfDay(date) };
	}

	protected getLabelOfStep(date: Date): string[] {
		return [format(date, 'dd.MM.yyyy'), format(date, 'EEEE', { locale: ru })];
	}

	protected getNextDateOfStep(date: Date): Date {
		return addDays(date, 1);
	}

	getRangeLabel(): string {
		return `${format(addDays(startOfWeek(this.date), 1), 'dd.MM.yyyy')} / ${format(addDays(endOfWeek(this.date), 1), 'dd.MM.yyyy')}`;
	}

	async getData(): Promise<ChartData<'bar'>> {
		this.setTotalRange({ start: addDays(startOfWeek(this.date), 1), end: addDays(endOfWeek(this.date), 1) });

		return super.getData();
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
