import { createSelector } from '@reduxjs/toolkit';

export const selectOperation = createSelector(
	(state: RootState) => state.operation,
	(operation) => operation,
);

export const selectOperationId = createSelector(selectOperation, (operation) => operation.id);
