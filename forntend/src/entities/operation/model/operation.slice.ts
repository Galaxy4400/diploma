import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OperationState, OperationType } from './operation.types';

const name = 'operation';

const initialState: OperationState = {
	id: null,
	user: null,
	account: null,
	category: null,
	name: null,
	amount: null,
	comment: null,
	status: null,
	createdAt: null,
};

const reducers = {
	setOperation: (state: OperationState, { payload }: PayloadAction<OperationType>) => {
		return Object.assign(state, payload);
	},

	resetOperation: () => initialState,
};

export const operationSlice = createSlice({ name, initialState, reducers });

export const { setOperation, resetOperation } = operationSlice.actions;

export const operationReducer = operationSlice.reducer;
