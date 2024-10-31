import { getOperations, OperationType } from 'shared/api/operation';
import { ID } from 'shared/types';

export class OperationsService {
	async fetchOperations(
		timeRange: { start: Date; end: Date },
		account: ID | null = null,
	): Promise<OperationType[]> {
		const response = await getOperations({
			daterange: `${timeRange.start.toISOString()},${timeRange.end.toISOString()}`,
			...(account && { account }),
		});

		return response.pagingData?.items || [];
	}
}
