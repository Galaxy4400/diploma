import { createSelector } from '@reduxjs/toolkit';

const selectAccountDataState = (state: RootState) => state.accountData;

export const selectAccountData = createSelector(selectAccountDataState, (state) => state.account);

export const selectAccountDataId = createSelector(selectAccountData, (state) => state.id);

export const selectAccountDataLoading = createSelector(selectAccountDataState, (state) => state.loading);

export const selectAccountDataError = createSelector(selectAccountDataState, (state) => state.error);