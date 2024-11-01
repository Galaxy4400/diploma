import { OperationType } from 'shared/api/operation';
import { CategoryType } from 'shared/lib/category';

export const operationsTotalSum = (operations: OperationType[]) => {
	return operations.reduce(
		(sum, operation) => {
			if (operation.category?.type === CategoryType.income) {
				sum.income += operation.amount;
			} else {
				sum.expense += operation.amount;
			}
			return sum;
		},
		{ income: 0, expense: 0 },
	);
};
