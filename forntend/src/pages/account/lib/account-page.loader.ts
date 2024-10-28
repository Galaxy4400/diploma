import { defer } from 'react-router-dom';
import { HasParams, ID } from 'shared/types';
import { getAccount } from 'shared/api/account';
import { getOperationsByAccount } from 'shared/api/operation';
import { OPERATIONS_PER_LOAD } from 'shared/constants';

const processGetAccount = async (accountId: ID) => {
	const [accountResponse, operationsResponse] = await Promise.all([
		getAccount(accountId),
		getOperationsByAccount(accountId, { limit: OPERATIONS_PER_LOAD }),
	]);

	if (!accountResponse.account) {
		throw new Error(accountResponse.error || 'Unknown error');
	}

	if (!operationsResponse.pagingData) {
		throw new Error(operationsResponse.error || 'Unknown error');
	}

	const account = accountResponse.account;

	return account;
};

export const accountPageLoader = async ({ params }: HasParams<{ id: string }>) => {
	const id = params.id;

	if (!id) {
		throw new Error('Account ID is missing in route parameters.');
	}

	return defer({
		id,
		account: processGetAccount(id),
	});
};
