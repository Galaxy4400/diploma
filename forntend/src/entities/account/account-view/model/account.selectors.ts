import { createSelector } from '@reduxjs/toolkit';

const selectAccountState = (state: RootState) => state.account;

export const selectAccount = createSelector(selectAccountState, (state) => state.account);

export const selectAccountLoading = createSelector(selectAccountState, (state) => state.loading);

export const selectAccountError = createSelector(selectAccountState, (state) => state.error);
