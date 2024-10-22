import { createSlice } from '@reduxjs/toolkit';

const name = 'operation';

const initialState = {
	id: null,
	userId: null,
	accountId: null,
	categoryId: null,
	name: null,
	amount: null,
	createdAt: null,
};

const reducers = {
	setOperation: (state, { payload }) => Object.assign(state, payload),

	resetOperation: () => initialState,
};

export const operationSlice = createSlice({ name, initialState, reducers });

export const { setOperation, resetOperation } = operationSlice.actions;

export const operationReducer = operationSlice.reducer;
