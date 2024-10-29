import { createSlice } from '@reduxjs/toolkit';
import { fetchGetOperationList, fetchGetOperationListAdd } from './operation-list.thunks';
import { OperationListState } from './operation-list.types';
import { fetchDeleteOperation } from 'entities/operation/operation-data';
import { OPERATIONS_PER_LOAD } from 'shared/constants';

const initialState: OperationListState = {
	operations: [],
	page: 0,
	total: 0,
	limit: OPERATIONS_PER_LOAD,
	totalPages: 0,
	loading: false,
	adding: false,
	isAll: false,
	error: null,
};

export const operationListSlice = createSlice({
	name: 'operations',
	initialState,
	reducers: {
		operationListStoreClear: () => initialState,
	},
	extraReducers: (builder) =>
		builder
			// Get operation list process
			.addCase(fetchGetOperationList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchGetOperationList.fulfilled, (state, { payload }) => {
				state.operations = payload.items;
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

			// Get operation list to add process
			.addCase(fetchGetOperationListAdd.pending, (state) => {
				state.adding = true;
				state.error = null;
			})
			.addCase(fetchGetOperationListAdd.fulfilled, (state, { payload }) => {
				state.operations = [...state.operations, ...payload.items];
				state.page = payload.page;
				state.isAll = payload.page >= payload.totalPages;
				state.adding = false;
				state.error = null;
			})
			.addCase(fetchGetOperationListAdd.rejected, (state, { payload }) => {
				state.adding = false;
				state.error = payload?.message ?? null;
			})

			// Delete operation process
			.addCase(fetchDeleteOperation.fulfilled, (state, { payload }) => {
				state.operations = state.operations.filter((operation) => operation.id !== payload);
			}),
});

export const { operationListStoreClear } = operationListSlice.actions;

export const operationListReducer = operationListSlice.reducer;
