import { createSlice } from '@reduxjs/toolkit';
import { CategoryListState } from './category-list.types';
import { getCategoryList } from './category-list.thunks';

const initialState: CategoryListState = {
	categories: [],
	loading: false,
	error: null,
};

export const categoryListSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		clearCategoryListStore: (store) => {
			store.categories = [];
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(getCategoryList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getCategoryList.fulfilled, (state, { payload }) => {
				state.categories = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getCategoryList.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const { clearCategoryListStore } = categoryListSlice.actions;

export const categoryListReducer = categoryListSlice.reducer;
