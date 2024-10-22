import { createSlice } from '@reduxjs/toolkit';

const name = 'auth';

const initialState = {
	id: null,
	login: null,
	email: null,
	name: null,
	surname: null,
	address: null,
	session: null,
};

const reducers = {
	setAuth: (state, { payload }) => Object.assign(state, payload),
	resetAuth: () => initialState,
};

export const authSlice = createSlice({ name, initialState, reducers });

export const { setAuth, resetAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
