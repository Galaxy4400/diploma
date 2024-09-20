import { api } from "../api";

export const updateCategory = async (session, categoryId, updatingCategoryData) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const authSession = await api.getSession(session);
	
	if (!authSession?.userId) {
		return {
			ok: false,
			error: 'Такой категории не существует',
			data: null,
		}
	}

	const updatedCategory = await api.updateCategory(categoryId, updatingCategoryData);

	return {
		ok: true,
		error: null,
		data: updatedCategory,
	}
}