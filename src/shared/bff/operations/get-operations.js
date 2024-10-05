import { SESSION_KEY_NAME } from '../../lib/session';
import { api } from '../api';

export const getOperations = async ({ accountId = null, categoryId = null, limit = null, start = null }) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		};
	}

	const authSession = await api.getSession(session);

	const searchProps = [];
	searchProps.push(`_sort=id&_order=desc`);
	if (authSession?.userId) searchProps.push(`userId_like=${authSession.userId}`);
	if (accountId) searchProps.push(`accountId_like=${accountId}`);
	if (categoryId) searchProps.push(`categoryId_like=${categoryId}`);
	if (limit) searchProps.push(`_limit=${limit}`);
	if (start) searchProps.push(`_start=${start}`);

	const [operations, accounts, categories] = await Promise.all([
		api.getOperations(searchProps.join('&')),
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
		data: enhancedOperations,
	};
};
