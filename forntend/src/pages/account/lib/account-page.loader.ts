import { defer } from 'react-router-dom';
import { OPERATIONS_PER_LOAD, OperationsResponse } from 'entities/operation';
import { request } from 'shared/api';
import { HasParams, ID } from 'shared/types';
import { AccountResponse } from 'entities/account';

const getAccount = async (accountId: ID) => {
	const [accountResponse, operationsResponse] = await Promise.all([
		request<AccountResponse>({ url: `/accounts/${accountId}` }),
		request<OperationsResponse>({
			url: `/operations/account/${accountId}`,
			query: { limit: OPERATIONS_PER_LOAD },
		}),
	]);

	if (!accountResponse.account) {
		throw new Error(accountResponse.error || 'Unknown error');
	}

	if (!operationsResponse.pagingData) {
		throw new Error(operationsResponse.error || 'Unknown error');
	}

	const account = accountResponse.account;
	account.operations = operationsResponse.pagingData.items;

	return account;
};

export const accountPageLoader = async ({ params }: HasParams<{ id: string }>) => {
	const id = params.id;

	if (!id) {
		throw new Error('Account ID is missing in route parameters.');
	}

	return defer({
		id,
		account: getAccount(id),
	});
};
