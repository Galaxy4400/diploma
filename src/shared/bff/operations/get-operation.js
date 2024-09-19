import { api } from "../api";

export const getOperation = async (session, operationId, userId) => {

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const operation = await api.getOperation(operationId);

	if (!operation || operation.userId !== userId) {
		return {
			ok: false,
			error: 'Счет не найден',
			data: null,
		}
	}

	return {
		ok: true,
		error: null,
		data: operation,
	}
};