import { createSelector } from '@reduxjs/toolkit';

const selectAccountViewState = (state: RootState) => state.accountView;

export const selectAccountView = createSelector(selectAccountViewState, (state) => state.account);

export const selectAccountViewLoading = createSelector(selectAccountViewState, (state) => state.loading);

export const selectAccountViewError = createSelector(selectAccountViewState, (state) => state.error);
