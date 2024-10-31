import { getWeek, startOfWeek } from 'date-fns';

export const getWeekName = (date: Date = new Date()) => `Неделя ${getWeek(startOfWeek(date))}`;
