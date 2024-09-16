import { setAuth } from "./auth.actions";

export const updateAuth = (requestServer, userId, updatingData) => async (dispatch) => {
	const { data: user } = await requestServer.updateUser(userId, updatingData);

	dispatch(setAuth(user));
}