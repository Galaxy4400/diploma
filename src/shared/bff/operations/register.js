import { SESSION_KEY_NAME } from "../../lib/session";
import { api } from "../api";

export const register = async (regLogin, regPassword) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	if (session) {
		return {
			ok: false,
			error: 'Вы уже в системе',
			data: null,
		}
	}
	
	const existedUser = await api.findUser(`login=${regLogin}`);

	if (existedUser) {
		return {
			ok: false,
			error: 'Такой логин уже занят',
			data: null,
		}
	}
	
	const user = await api.createUser(regLogin, regPassword);
	
	return {
		ok: true,
		error: null,
		data: {
			id: user.id,
			login: user.login,
		},
	}
};