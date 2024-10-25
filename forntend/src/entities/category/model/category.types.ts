import { CategoryIcons, ID, Nullable } from '@/shared/types';

export interface CategoryType {
	id: ID;
	name: string;
	icon: CategoryIcons;
	type: ID;
	createdAt: string;
}

export type CategoryState = Nullable<CategoryType>;
