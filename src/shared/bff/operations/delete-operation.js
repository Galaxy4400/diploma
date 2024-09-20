import { api } from "../api";

export const deleteOperation = async (session, operationId) => {
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