import { api } from "../api";

export const getOperation = async (session, operationId) => {

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
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