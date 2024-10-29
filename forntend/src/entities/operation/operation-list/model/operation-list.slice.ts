import { createSlice } from '@reduxjs/toolkit';
import { fetchGetOperationList } from './operation-list.thunks';
import { OperationListState } from './operation-list.types';
import { fetchDeleteOperation } from 'entities/operation/operation-data';

const initialState: OperationListState = {
	operations: [],
	page: 0,
	total: 0,
	totalPages: 0,
	loading: false,
	isAll: false,
	error: null,
};

export const operationListSlice = createSlice({
	name: 'operations',
	initialState,
	reducers: {
		clearOperationListStore: (state) => {
			Object.assign(state, initialState);
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
				state.operations = [...state.operations, ...payload.items];
				state.page = payload.page;
				state.total = payload.total;
				state.totalPages = payload.totalPages;
				state.isAll = payload.page >= payload.totalPages;
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
