import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountState, AccountType } from './account.types';

const name = 'account';

const initialState: AccountState = {
	id: null,
	type: null,
	name: null,
	createdAt: null,
	amount: null,
};

const reducers = {
	setAccount: (state: AccountState, { payload }: PayloadAction<AccountType>) => {
		Object.assign(state, payload);
	},

	resetAccount: () => initialState,
};

export const accountSlice = createSlice({ name, initialState, reducers });

export const { setAccount, resetAccount } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
