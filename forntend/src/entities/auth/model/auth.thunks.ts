import { request } from '@/shared/api';
import { setAuth } from './auth.slice';
import { AppDispatch } from '@/app/store';
import { AuthResponse, UserType } from '@/shared/types';

export const updateAuthAsync =
	(userId: string | number, updatingData: Partial<UserType>) => async (dispatch: AppDispatch) => {
		const { user, error } = await request<AuthResponse>({
			url: `/users/${userId}`,
			method: 'PATCH',
			data: updatingData,
		});

		if (!user) {
			throw new Error(error || 'Unknown error');
		}

		dispatch(setAuth(user));
	};
