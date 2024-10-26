import { AccountResponse } from 'entities/account';
import { defer } from 'react-router-dom';
import { request } from 'shared/api';
import { HasParams, ID } from 'shared/types';

const getAccount = async (accountId: ID) => {
	const { account } = await request<AccountResponse>({ url: `/accounts/${accountId}` });

	return account;
};

export const accountEditPageLoader = async ({ params }: HasParams<{ id: string }>) => {
	const id = params.id;

	if (!id) {
		throw new Error('Account ID is missing in route parameters.');
	}

	return defer({
		account: getAccount(id),
	});
};
