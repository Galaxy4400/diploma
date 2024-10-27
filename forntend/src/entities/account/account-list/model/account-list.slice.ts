import { createSlice } from '@reduxjs/toolkit';
import { AccountListState } from './account-list.types';
import { fetchAccountList } from './account-list.thunks';

const initialState: AccountListState = {
	accounts: [],
	loading: false,
	error: null,
};

export const accountListSlice = createSlice({
	name: 'accounts',
	initialState,
	reducers: {
		clearAccountListStore: (store) => {
			store.accounts = [];
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchAccountList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAccountList.fulfilled, (state, { payload }) => {
				state.accounts = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchAccountList.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const { clearAccountListStore } = accountListSlice.actions;

export const accountListReducer = accountListSlice.reducer;
