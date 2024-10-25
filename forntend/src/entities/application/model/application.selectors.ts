import { RootState } from '@/app/store';

export const selectFilter = ({ app }: RootState) => app.filter;
