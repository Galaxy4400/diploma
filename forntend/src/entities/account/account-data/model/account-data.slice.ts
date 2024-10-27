import { createSlice } from '@reduxjs/toolkit';
import { AccountDataState } from './account-data.types';
import { getAccountData } from './account-data.thunks';

const initialState: AccountDataState = {
	account: {
		id: '',
		type: '',
		name: '',
		createdAt: '',
		amount: 0,
		comment: '',
	},
	loading: false,
	error: null,
};

export const accountDataSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getAccountData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAccountData.fulfilled, (state, { payload }) => {
				state.account = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getAccountData.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const accountDataReducer = accountDataSlice.reducer;
