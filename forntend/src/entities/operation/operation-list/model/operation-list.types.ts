import { OperationType } from 'shared/api/operation';

export interface OperationListState {
	operations: OperationType[];
	page: number;
	total: number;
	limit: number;
	totalPages: number;
	loading: boolean;
	adding: boolean;
	isAll: boolean;
	error: string | null;
}
