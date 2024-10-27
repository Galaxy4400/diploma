import { createSlice } from '@reduxjs/toolkit';
import { CategoryViewState } from './category-view.types';
import { fetchCategoryView } from './category-view.thunks';

const initialState: CategoryViewState = {
	category: {
		id: '',
		name: '',
		icon: null,
		type: '',
		createdAt: '',
	},
	loading: false,
	error: null,
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchCategoryView.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCategoryView.fulfilled, (state, { payload }) => {
				state.category = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchCategoryView.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const categoryViewReducer = categorySlice.reducer;
