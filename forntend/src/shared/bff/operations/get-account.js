import { SESSION_KEY_NAME } from '../../lib/session';
import { api } from '../api';

export const getAccount = async (accountId, operationsLimit = null) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		};
	}

	const [authSession, account] = await Promise.all([api.getSession(session), api.getAccount(accountId)]);

	if (!account || account.userId !== authSession.userId) {
		return {
			ok: false,
			error: 'Счет не найден',
			data: null,
		};
	}

	const [operations, accounts, categories] = await Promise.all([
		api.getOperations(
			`accountId_like=${accountId}&_sort=id&_order=desc${operationsLimit && `&_limit=${operationsLimit}`}`,
		),
		api.getAccounts(),
		api.getCategories(),
	]);

	const enhancedOperations = operations.map((operation) => ({
		...operation,
		account: accounts.find((account) => account.id === operation.accountId),
		category: categories.find((category) => category.id === operation.categoryId),
	}));

	return {
		ok: true,
		error: null,
		data: {
			...account,
			operations: enhancedOperations,
		},
	};
};
