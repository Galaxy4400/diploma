import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryState, CategoryType } from './category.types';

const name = 'category';

const initialState: CategoryState = {
	id: null,
	name: null,
	type: null,
	createdAt: null,
};

const reducers = {
	setCategory: (state: CategoryState, { payload }: PayloadAction<CategoryType>) => {
		return Object.assign(state, payload);
	},

	resetCategory: () => initialState,
};

export const categorySlice = createSlice({ name, initialState, reducers });

export const { setCategory, resetCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
