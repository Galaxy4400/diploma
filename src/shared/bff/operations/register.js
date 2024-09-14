import { createUser, findUser } from "../api";
import { sessions } from "../sessions";

export const register = async (session, regLogin, regPassword) => {

	if (session) {
		return {
			error: 'Вы уже в системе',
			res: null,
		}
	}
	
	const existedUser = await findUser(`login=${regLogin}`);

	if (existedUser) {
		return {
			error: 'Такой логин уже занят',
			res: null,
		}
	}
	
	const user = await createUser(regLogin, regPassword);
	
	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
		},
	}
};