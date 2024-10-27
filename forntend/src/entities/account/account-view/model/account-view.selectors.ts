import { createSelector } from '@reduxjs/toolkit';

const selectAccountViewState = (state: RootState) => state.accountView;

export const selectAccount = createSelector(selectAccountViewState, (state) => state.account);

export const selectAccountLoading = createSelector(selectAccountViewState, (state) => state.loading);

export const selectAccountError = createSelector(selectAccountViewState, (state) => state.error);
