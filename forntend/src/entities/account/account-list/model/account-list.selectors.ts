import { createSelector } from '@reduxjs/toolkit';

const selectAccountListState = (state: RootState) => state.accountList;

export const selectAccount = createSelector(selectAccountListState, (state) => state.accounts);

export const selectAccountLoading = createSelector(selectAccountListState, (state) => state.loading);

export const selectAccountError = createSelector(selectAccountListState, (state) => state.error);
