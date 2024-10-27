import { createSelector } from '@reduxjs/toolkit';

const selectCategoryDataState = (state: RootState) => state.categoryData;

export const selectCategoryData = createSelector(selectCategoryDataState, (state) => state.category);

export const selectCategoryDataId = createSelector(selectCategoryData, (state) => state.id);

export const selectCategoryDataLoading = createSelector(selectCategoryDataState, (state) => state.loading);

export const selectCategoryDataError = createSelector(selectCategoryDataState, (state) => state.error);
