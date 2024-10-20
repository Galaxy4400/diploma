import { defer } from 'react-router-dom';
import { request } from '../../../shared/api';

const getAccount = async (accountId) => {
	const { account } = await request({ url: `/accounts/${accountId}` });

	return account;
};

export const accountEditPageLoader = async ({ params }) => {
	const id = params.id;

	return defer({
		account: getAccount(id),
	});
};
