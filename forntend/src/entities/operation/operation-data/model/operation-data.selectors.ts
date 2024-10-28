import { createSelector } from '@reduxjs/toolkit';

const selectOperationDataState = (state: RootState) => state.operationData;

export const selectOperationData = createSelector(selectOperationDataState, (state) => state.operation);

export const selectOperationDataId = createSelector(selectOperationData, (state) => state.id);

export const selectOperationDataLoading = createSelector(selectOperationDataState, (state) => state.loading);

export const selectOperationDataError = createSelector(selectOperationDataState, (state) => state.error);