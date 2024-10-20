import { defer } from 'react-router-dom';
import { OPERATIONS_PER_LOAD } from '../../../entities/operation';
import { request } from '../../../shared/api';

const getAccount = async (accountId) => {
	const [accountResponse, operationsResponse] = await Promise.all([
		request({ url: `/accounts/${accountId}` }),
		request({ url: `/operations/account/${accountId}` }),
	]);

	const account = accountResponse.account;
	account.operations = operationsResponse.pagingData.items;

	return account;
};

export const accountPageLoader = async ({ params }) => {
	const id = params.id;

	return defer({
		id,
		account: getAccount(id),
	});
};
