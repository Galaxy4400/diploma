import { createSelector } from '@reduxjs/toolkit';

const selectOperationListState = (state: RootState) => state.operationList;

export const selectOperationList = createSelector(selectOperationListState, (state) => state.operations);

export const selectOperationListLoading = createSelector(selectOperationListState, (state) => state.loading);

export const selectOperationListError = createSelector(selectOperationListState, (state) => state.error);

export const selectOperationListPage = createSelector(selectOperationListState, (state) => state.page);

export const selectOperationListTotal = createSelector(selectOperationListState, (state) => state.total);

export const selectOperationListIsAll = createSelector(selectOperationListState, (state) => state.isAll);

export const selectOperationListTotalPages = createSelector(
	selectOperationListState,
	(state) => state.totalPages,
);
