import { SESSION_KEY_NAME } from '../../lib/session';
import { api } from '../api';

export const getOperation = async (operationId) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		};
	}

	const [authSession, operation] = await Promise.all([
		api.getSession(session),
		api.getOperation(operationId),
	]);

	if (!operation || operation.userId !== authSession.userId) {
		return {
			ok: false,
			error: 'Счет не найден',
			data: null,
		};
	}

	const [account, category] = await Promise.all([
		api.getAccount(operation.accountId),
		api.getCategory(operation.categoryId),
	]);

	return {
		ok: true,
		error: null,
		data: {
			...operation,
			account,
			category,
		},
	};
};
