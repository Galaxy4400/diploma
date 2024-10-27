import { CategoryType } from 'shared/api/category';

export interface CategoryViewState {
	category: CategoryType;
	loading: boolean;
	error: string | null;
}
