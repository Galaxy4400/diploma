import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApplicationState, FilterProps } from './application.types';

const name = 'application';

const initialState: ApplicationState = {
	filter: {},
};

const reducers = {
	setFilter: (state: ApplicationState, { payload }: PayloadAction<FilterProps>) => {
		state.filter = payload;
	},
	resetApp: () => initialState,
};

export const applicationSlice = createSlice({ name, initialState, reducers });

export const { setFilter, resetApp } = applicationSlice.actions;

export const applicationReducer = applicationSlice.reducer;
