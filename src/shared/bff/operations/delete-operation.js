import { api } from "../api";

export const deleteOperation = async (session, operationId, userId) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const operation = await api.getOperation(operationId);

	if (!operation || operation.userId !== userId) {
		return {
			ok: false,
			error: 'Такой операции не существует',
			data: null,
		}
	}

	await api.deleteOperation(operationId);

	return {
		ok: true,
		error: null,
		data: null,
	}
}