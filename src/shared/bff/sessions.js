import { createSessionFetch, deleteSessionFetch, getSessionFetch, getUserFetch } from "./api";

export const sessions = {
	create: (user) => {
		const hash = Math.random().toFixed(50);

		createSessionFetch(hash, user.id);

		return hash;
	},

	remove: async (hash) => {
		const session = await getSessionFetch(hash);

		if (!session) return;

		deleteSessionFetch(session.id);
	},

	access: async (hash, accessRoles) => {
		const session = await getSessionFetch(hash);

		if (!session) return;

		const user = await getUserFetch(session.userId, true);

		return !!user && accessRoles.includes(user.roleId);
	}
};