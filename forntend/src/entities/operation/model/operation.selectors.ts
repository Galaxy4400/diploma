import { createSelector } from '@reduxjs/toolkit';

export const selectOperation = (state: RootState) => state.operation;

export const selectOperationId = createSelector(selectOperation, (operation) => operation.id);
