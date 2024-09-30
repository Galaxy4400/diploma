import { SESSION_KEY_NAME } from '../../lib/session';
import { api } from '../api';
import { CATEGORY_TYPE } from '../constants';

export const createOperation = async (operationData) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		};
	}

	const createdOperation = await api.createOperation(operationData);

	if (!createdOperation) {
		return {
			ok: false,
			error: 'Что-то пошло не так',
			data: null,
		};
	}

	const [operationAccount, operationCategory] = await Promise.all([
		api.getAccount(operationData.accountId),
		api.getCategory(operationData.categoryId),
	]);

	let newAmount;

	operationCategory.typeId === CATEGORY_TYPE.INCOME
		? (newAmount = operationAccount.amount + createdOperation.amount)
		: (newAmount = operationAccount.amount - createdOperation.amount);

	const { id, ...updatingAccountData } = {
		...operationAccount,
		amount: newAmount,
	};

	await api.updateAccount(id, updatingAccountData);

	return {
		ok: true,
		error: null,
		data: createdOperation,
	};
};
