import { createSelector } from '@reduxjs/toolkit';

export const selectOperations = createSelector(
	(state: RootState) => state.operations,
	(operations) => operations,
);
