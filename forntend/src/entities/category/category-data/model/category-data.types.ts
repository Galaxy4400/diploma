import { CategoryType } from 'shared/api/category';

export interface CategoryDataState {
	category: CategoryType;
	loading: boolean;
	error: string | null;
}
