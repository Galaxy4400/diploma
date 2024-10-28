import { createSlice } from '@reduxjs/toolkit';
import { CategoryDataState } from './category-data.types';
import { fetchGetCategoryData } from './category-data.thunks';

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

export const categoryDataSlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchGetCategoryData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchGetCategoryData.fulfilled, (state, { payload }) => {
				state.category = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchGetCategoryData.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export const categoryDataReducer = categoryDataSlice.reducer;
