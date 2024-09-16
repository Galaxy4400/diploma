import { api } from "./api";

export const sessions = {
	create: (user) => {
		const hash = Math.random().toFixed(50);

		api.createSession(hash, user.id);

		return hash;
	},

	remove: async (hash) => {
		const session = await api.getSession(hash);

		if (!session) return;

		api.deleteSession(session.id);
	},

	access: async (hash, accessRoles) => {
		const session = await api.getSession(hash);

		if (!session) return;

		const user = await api.getUser(session.userId, true);

		return !!user && accessRoles.includes(user.roleId);
	}
};