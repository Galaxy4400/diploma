import { createSelector } from '@reduxjs/toolkit';

const selectCategoryViewState = (state: RootState) => state.categoryView;

export const selectCategoryView = createSelector(selectCategoryViewState, (state) => state.category);

export const selectCategoryViewLoading = createSelector(selectCategoryViewState, (state) => state.loading);

export const selectCategoryViewError = createSelector(selectCategoryViewState, (state) => state.error);
