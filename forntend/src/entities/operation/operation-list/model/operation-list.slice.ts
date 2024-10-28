import { createSlice } from '@reduxjs/toolkit';
import { fetchGetOperationList } from './operation-list.thunks';
import { OperationListState } from './operation-list.types';
import { fetchDeleteOperation } from 'entities/operation/operation-data';

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
			// Get operation list process
			.addCase(fetchGetOperationList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchGetOperationList.fulfilled, (state, { payload }) => {
				state.operations = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchGetOperationList.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			})

			// Delete operation process
			.addCase(fetchDeleteOperation.fulfilled, (state, { payload }) => {
				state.operations = state.operations.filter((operation) => operation.id !== payload);
			}),
});

export const { clearOperationListStore } = operationListSlice.actions;

export const operationListReducer = operationListSlice.reducer;
