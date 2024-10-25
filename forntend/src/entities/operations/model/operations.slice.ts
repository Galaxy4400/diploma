import { OperationType } from '@/entities/operation/model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const name = 'operations';

const initialState: OperationType[] = [];

const reducers = {
	setOperations: (state: OperationType[], { payload }: PayloadAction<OperationType[]>) => {
		state.splice(0, state.length, ...payload);
	},

	addOperations: (state: OperationType[], { payload }: PayloadAction<OperationType[]>) => {
		state.push(...payload);
	},

	resetOperations: () => initialState,
};

export const operationsSlice = createSlice({ name, initialState, reducers });

export const { setOperations, addOperations, resetOperations } = operationsSlice.actions;

export const operationsReducer = operationsSlice.reducer;
