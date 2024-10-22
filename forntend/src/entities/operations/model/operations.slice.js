import { createSlice } from '@reduxjs/toolkit';

const name = 'operations';

const initialState = [];

const reducers = {
	setOperations: (state, { payload }) => [...payload],

	addOperations: (state, { payload }) => state.push(...payload),

	resetOperations: () => initialState,
};

export const operationsSlice = createSlice({ name, initialState, reducers });

export const { setOperations, addOperations, resetOperations } = operationsSlice.actions;

export const operationsReducer = operationsSlice.reducer;
