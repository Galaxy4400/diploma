import { OperationType } from 'shared/api/operation';

export interface OperationDataState {
	operation: OperationType;
	loading: boolean;
	error: string | null;
}
