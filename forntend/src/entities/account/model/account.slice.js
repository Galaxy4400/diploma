import { createSlice } from '@reduxjs/toolkit';

const name = 'account';

const initialState = {
	id: null,
	typeId: null,
	name: null,
	createdAt: null,
	amount: null,
};

const reducers = {
	setAccount: (state, { payload }) => Object.assign(state, payload),

	resetAccount: () => initialState,
};

export const accountSlice = createSlice({ name, initialState, reducers });

export const { setAccount, resetAccount } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
