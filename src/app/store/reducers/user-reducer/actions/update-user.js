import { setUser } from "./set-user";

export const updateUser = (requestServer, userId, updatingData) => async (dispatch) => {
	const { data: user } = await requestServer.updateUser(userId, updatingData);

	console.log(user);

	dispatch(setUser(user));
}