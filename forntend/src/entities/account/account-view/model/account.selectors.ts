import { createSelector } from '@reduxjs/toolkit';

export const selectAccount = (state: RootState) => state.account;

export const selectAccountId = createSelector(selectAccount, (account) => account.id);
