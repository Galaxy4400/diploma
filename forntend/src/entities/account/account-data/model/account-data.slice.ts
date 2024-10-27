import { createSlice } from '@reduxjs/toolkit';
import { AccountDataState } from './account-data.types';
import { fetchAccountData } from './account-data.thunks';

const initialState: AccountDataState = {
	account: {
		id: '',
		type: '',
		name: '',
		createdAt: '',
		amount: 0,
		comment: '',
		operations: [],
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
			.addCase(fetchAccountData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAccountData.fulfilled, (state, { payload }) => {
				state.account = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchAccountData.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const accountDataReducer = accountDataSlice.reducer;
