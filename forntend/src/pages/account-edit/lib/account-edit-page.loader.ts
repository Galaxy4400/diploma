import { defer } from 'react-router-dom';
import { getAccount } from 'shared/api/account';
import { HasParams, ID } from 'shared/types';

const processGetAccount = async (accountId: ID) => {
	const { account, error } = await getAccount(accountId);

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
		account: processGetAccount(id),
	});
};
