import { createSelector } from '@reduxjs/toolkit';

const selectOperationListState = (state: RootState) => state.operationList;

export const selectOperationList = createSelector(selectOperationListState, (state) => state.operations);

export const selectOperationListLoading = createSelector(selectOperationListState, (state) => state.loading);

export const selectOperationListError = createSelector(selectOperationListState, (state) => state.error);
