import { setAuthUser } from "../actions/set-auth-user";

export const updateAuthUser = (requestServer, userId, updatingData) => async (dispatch) => {
	const { data: user } = await requestServer.updateUser(userId, updatingData);

	dispatch(setAuthUser(user));
}