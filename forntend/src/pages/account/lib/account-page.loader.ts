import { defer, Params } from 'react-router-dom';
import { OPERATIONS_PER_LOAD, OperationsResponse } from 'entities/operation';
import { request } from 'shared/api';
import { HasParams, ID } from 'shared/types';
import { AccountResponse } from 'entities/account';

const getAccount = async (accountId: ID) => {
	const [{ account }, { pagingData }] = await Promise.all([
		request<AccountResponse>({ url: `/accounts/${accountId}` }),
		request<OperationsResponse>({
			url: `/operations/account/${accountId}`,
			query: { limit: OPERATIONS_PER_LOAD },
		}),
	]);

	if (!account) {
		throw new Error('Error loading data: account information not found.');
	}

	if (!pagingData) {
		throw new Error('Error loading data: pagingData information not found.');
	}

	account.operations = pagingData.items;

	return account;
};

export const accountPageLoader = async ({ params }: HasParams<{ id: string }>) => {
	const id = params.id;

	return defer({
		id,
		account: getAccount(id),
	});
};
