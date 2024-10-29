import { OperationType } from 'shared/api/operation';

export interface OperationListState {
	operations: OperationType[];
	page: number;
	total: number;
	totalPages: number;
	loading: boolean;
	isAll: boolean;
	error: string | null;
}
