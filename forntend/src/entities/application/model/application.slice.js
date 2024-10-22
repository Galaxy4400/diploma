import { createSlice } from '@reduxjs/toolkit';

const name = 'application';

const initialState = {
	filter: {},
};

const reducers = {
	setFilter: (state, { payload }) => {
		state.filter = payload;
	},
	resetApp: () => initialState,
};

export const applicationSlice = createSlice({ name, initialState, reducers });

export const { setFilter, resetApp } = applicationSlice.actions;

export const applicationReducer = applicationSlice.reducer;
