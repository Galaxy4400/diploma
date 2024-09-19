import { api } from "../api";

export const createOperation = async (session, operationData) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const createdOperation = await api.createOperation(operationData);

	return {
		ok: true,
		error: null,
		data: createdOperation,
	}
}