import { SESSION_KEY_NAME } from "../../lib/session";
import { api } from "../api";

export const createOperation = async (operationData) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

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