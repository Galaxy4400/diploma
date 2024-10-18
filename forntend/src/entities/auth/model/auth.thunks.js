import { server } from '../../../shared/bff';
import { setAuth } from './auth.actions';

export const updateAuth = (updatingData) => async (dispatch) => {
	const { data: user } = await server.updateUser(updatingData);

	dispatch(setAuth(user));
};
