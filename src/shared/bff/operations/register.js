import { createUserFetch, findUserFetch } from "../api";

export const register = async (session, regLogin, regPassword) => {

	if (session) {
		return {
			ok: false,
			error: 'Вы уже в системе',
			data: null,
		}
	}
	
	const existedUser = await findUserFetch(`login=${regLogin}`);

	if (existedUser) {
		return {
			ok: false,
			error: 'Такой логин уже занят',
			data: null,
		}
	}
	
	const user = await createUserFetch(regLogin, regPassword);
	
	return {
		ok: true,
		error: null,
		data: {
			id: user.id,
			login: user.login,
		},
	}
};