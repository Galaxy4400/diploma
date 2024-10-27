import { OperationType } from 'shared/api/operation';

export interface OperationListState {
	operations: OperationType[];
	loading: boolean;
	error: string | null;
}
