import { request } from '../../../shared/api';
import { setAuth } from './auth.actions';

export const updateAuthAsync = (userId, updatingData) => async (dispatch) => {
	const { user, error } = await request({ url: `/users/${userId}`, method: 'PATCH', data: updatingData });

	if (error) return;

	dispatch(setAuth(user));
};
