import { setAuth } from "./auth.actions";

export const updateAuth = (requestServer, updatingData) => async (dispatch) => {
	const { data: user } = await requestServer.updateUser(updatingData);

	dispatch(setAuth(user));
}