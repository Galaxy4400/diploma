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

	const [operationAccount, operationCategory] = await Promise.all([
		api.getAccount(operationData.accountId),
		api.getCategory(operationData.categoryId),
	]);

	let newAmount;

	operationCategory.typeId === CATEGORY_TYPE.INCOME
		? (newAmount = operationAccount.amount + operationData.amount)
		: (newAmount = operationAccount.amount - operationData.amount);

	const { id, ...updatingAccountData } = {
		...operationAccount,
		amount: newAmount,
	};

	if (newAmount >= 0) {
		await api.updateAccount(id, updatingAccountData);
	}

	const createdOperation = await api.createOperation({ ...operationData, status: newAmount >= 0 });

	if (!createdOperation) {
		return {
			ok: false,
			error: 'Что-то пошло не так',
			data: null,
		};
	}

	return {
		ok: true,
		error: null,
		data: createdOperation,
	};
};
