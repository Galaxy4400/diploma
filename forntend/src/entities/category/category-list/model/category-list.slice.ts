import { createSlice } from '@reduxjs/toolkit';
import { CategoryListState } from './category-list.types';
import { fetchCategoryList } from './category-list.thunks';

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
			.addCase(fetchCategoryList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCategoryList.fulfilled, (state, { payload }) => {
				state.categories = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchCategoryList.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const { clearCategoryListStore } = categoryListSlice.actions;

export const categoryListReducer = categoryListSlice.reducer;
