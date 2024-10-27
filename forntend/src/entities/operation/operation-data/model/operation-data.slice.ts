import { createSlice } from '@reduxjs/toolkit';
import { OperationDataState } from './operation-data.types';
import { getOperationData } from './operation-data.thunks';

const initialState: OperationDataState = {
	operation: {
		id: '',
		user: '',
		account: null,
		category: null,
		name: '',
		amount: 0,
		comment: '',
		status: false,
		createdAt: '',
	},
	loading: false,
	error: null,
};

export const operationDataSlice = createSlice({
	name: 'operation',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getOperationData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getOperationData.fulfilled, (state, { payload }) => {
				state.operation = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getOperationData.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const operationDataReducer = operationDataSlice.reducer;
