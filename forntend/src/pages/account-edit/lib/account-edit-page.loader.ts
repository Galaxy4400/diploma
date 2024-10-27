import { AccountResponse } from 'entities/account';
import { defer } from 'react-router-dom';
import { request } from 'shared/api/request';
import { HasParams, ID } from 'shared/types';

const getAccount = async (accountId: ID) => {
	const { account, error } = await request<AccountResponse>({ url: `/accounts/${accountId}` });

	if (!account) {
		throw new Error(error || 'Unknown error');
	}

	return account;
};

export const accountEditPageLoader = async ({ params }: HasParams<{ id: string }>) => {
	const id = params.id;

	if (!id) {
		throw new Error('Account ID is missing in route parameters.');
	}

	return defer({
		id,
		account: getAccount(id),
	});
};
