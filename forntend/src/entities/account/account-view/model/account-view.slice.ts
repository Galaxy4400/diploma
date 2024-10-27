import { createSlice } from '@reduxjs/toolkit';
import { AccountViewState } from './account-view.types';
import { fetchAccountView } from './account-view.thunks';

const initialState: AccountViewState = {
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

export const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchAccountView.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAccountView.fulfilled, (state, { payload }) => {
				state.account = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchAccountView.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const accountViewReducer = accountSlice.reducer;
