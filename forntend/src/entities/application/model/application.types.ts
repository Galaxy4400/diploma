import { ID } from '@/shared/types';

export interface FilterProps {
	account?: ID;
	category?: ID;
	daterange?: string;
	pricerange?: string;
}

export interface ApplicationState {
	filter: FilterProps;
}
