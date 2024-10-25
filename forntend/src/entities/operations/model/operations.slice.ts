import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OperationsState } from './operations.types';

const name = 'operations';

const initialState: OperationsState = [];

const reducers = {
	setOperations: (state: OperationsState, { payload }: PayloadAction<OperationsState>) => {
		state.splice(0, state.length, ...payload);
	},

	addOperations: (state: OperationsState, { payload }: PayloadAction<OperationsState>) => {
		state.push(...payload);
	},

	resetOperations: () => initialState,
};

export const operationsSlice = createSlice({ name, initialState, reducers });

export const { setOperations, addOperations, resetOperations } = operationsSlice.actions;

export const operationsReducer = operationsSlice.reducer;
