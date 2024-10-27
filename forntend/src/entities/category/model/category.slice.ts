import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryState } from './category.types';
import { CategoryType } from 'shared/api/category';

const name = 'category';

const initialState: CategoryState = {
	id: null,
	name: null,
	icon: null,
	type: null,
	createdAt: null,
};

const reducers = {
	setCategory: (state: CategoryState, { payload }: PayloadAction<CategoryType>) => {
		Object.assign(state, payload);
	},

	resetCategory: () => initialState,
};

export const categorySlice = createSlice({ name, initialState, reducers });

export const { setCategory, resetCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
