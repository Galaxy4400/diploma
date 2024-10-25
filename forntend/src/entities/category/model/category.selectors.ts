import { createSelector } from '@reduxjs/toolkit';

export const selectCategory = createSelector(
	(state: RootState) => state.category,
	(category) => category,
);

export const selectAccountId = createSelector(selectCategory, (category) => category.id);
