import { createSlice } from '@reduxjs/toolkit';
import { CategoryListState } from './category-list.types';
import { fetchGetCategoryList } from './category-list.thunks';

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
			.addCase(fetchGetCategoryList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchGetCategoryList.fulfilled, (state, { payload }) => {
				state.categories = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchGetCategoryList.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const { clearCategoryListStore } = categoryListSlice.actions;

export const categoryListReducer = categoryListSlice.reducer;
