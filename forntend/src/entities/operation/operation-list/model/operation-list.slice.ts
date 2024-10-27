import { createSlice } from '@reduxjs/toolkit';
import { fetchOperationList } from './operation-list.thunks';
import { OperationListState } from './operation-list.types';

const initialState: OperationListState = {
	operations: [],
	loading: false,
	error: null,
};

export const operationListSlice = createSlice({
	name: 'operations',
	initialState,
	reducers: {
		clearOperationListStore: (store) => {
			store.operations = [];
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchOperationList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchOperationList.fulfilled, (state, { payload }) => {
				state.operations = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchOperationList.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const { clearOperationListStore } = operationListSlice.actions;

export const operationListReducer = operationListSlice.reducer;
