import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, UserType } from './auth.types';

const name = 'auth';

const initialState: AuthState = {
	id: null,
	login: null,
	email: null,
	name: null,
	surname: null,
	address: null,
};

const reducers = {
	setAuth: (state: AuthState, { payload }: PayloadAction<UserType>) => Object.assign(state, payload),

	resetAuth: () => initialState,
};

export const authSlice = createSlice({ name, initialState, reducers });

export const { setAuth, resetAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
