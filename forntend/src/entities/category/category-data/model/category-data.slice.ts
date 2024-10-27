import { createSlice } from '@reduxjs/toolkit';
import { CategoryDataState } from './category-data.types';
import { fetchCategoryData } from './category-data.thunks';

const initialState: CategoryDataState = {
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
			.addCase(fetchCategoryData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCategoryData.fulfilled, (state, { payload }) => {
				state.category = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchCategoryData.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const categoryDataReducer = categorySlice.reducer;
