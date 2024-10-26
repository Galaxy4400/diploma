import { request } from 'shared/api';
import { setAuth } from './auth.slice';
import { AuthResponse, UserType } from './auth.types';
import { ID } from 'shared/types';

export const updateAuthAsync =
	(userId: ID, updatingData: Partial<UserType>) =>
	async (dispatch: AppDispatch): Promise<AuthResponse> => {
		const { user, error } = await request<AuthResponse>({
			url: `/users/${userId}`,
			method: 'PATCH',
			data: updatingData,
		});

		if (!user) {
			throw new Error(error || 'Unknown error');
		}

		dispatch(setAuth(user));

		return { user, error };
	};
