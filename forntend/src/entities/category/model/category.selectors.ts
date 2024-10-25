import { RootState } from '@/app/store';

export const selectCategory = ({ category }: RootState) => category;

export const selectCategoryId = ({ category }: RootState) => category.id;
