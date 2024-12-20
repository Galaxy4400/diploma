import { CategoryIcons, ID } from 'shared/types';

export interface CategoryType {
	id: ID;
	name: string;
	icon: CategoryIcons;
	type: ID;
	createdAt: string;
}

export interface CategoryResponse {
	readonly error: string | null;
	readonly category: CategoryType | null;
}

export interface CategoriesResponse {
	readonly error: string | null;
	readonly categories: CategoryType[] | null;
}
