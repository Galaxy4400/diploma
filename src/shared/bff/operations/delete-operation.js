import { SESSION_KEY_NAME } from "../../lib/session";
import { api } from "../api";

export const deleteOperation = async (operationId) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);
	
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const [authSession, operation] = await Promise.all([
		api.getSession(session), 
		api.getOperation(operationId),
	]);


	if (!operation || operation.userId !== authSession.userId) {
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