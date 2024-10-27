import { createSelector } from '@reduxjs/toolkit';

export const selectCategory = (state: RootState) => state.category;

export const selectAccountId = createSelector(selectCategory, (category) => category.id);
