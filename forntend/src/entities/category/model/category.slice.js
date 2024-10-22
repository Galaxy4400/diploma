import { createSlice } from '@reduxjs/toolkit';

const name = 'category';

const initialState = {
	id: null,
	name: null,
	typeId: null,
	createdAt: null,
};

const reducers = {
	setCategory: (state, { payload }) => Object.assign(state, payload),

	resetCategory: () => initialState,
};

export const categorySlice = createSlice({ name, initialState, reducers });

export const { setCategory, resetCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
